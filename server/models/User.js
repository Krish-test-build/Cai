import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: function() {
      return !this.googleId; // Password only required if not using Google auth
    }
  },
  googleId: String,
  profilePicture: String
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  try {
    if (this.isModified('password') && this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  } catch (error) {
    next(error);
  }
});

// Add method to validate password
userSchema.methods.validatePassword = async function(password) {
  try {
    if (!this.password) {
      return false; // Handle case where user has no password (e.g., Google auth)
    }
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
  } catch (error) {
    console.error('Password validation error:', error);
    throw new Error('Password validation failed');
  }
};

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
