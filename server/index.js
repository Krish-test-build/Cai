import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';
import passport from 'passport';
import session from 'express-session';

// Load env variables first before any other operations
dotenv.config();

// Validate required environment variables
const requiredEnvVars = ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'MONGO_URI', 'SESSION_SECRET', 'JWT_SECRET'];
const missingVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingVars.length > 0) {
  console.error('Missing required environment variables:', missingVars);
  process.exit(1);
}

// Now initialize passport configuration
import './config/passport.js';

// Better debugging for environment variables
console.log('Environment variables loaded:');
console.log({
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID?.substring(0, 10) + '...',
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET ? '[SECRET]' : 'undefined',
  MONGO_URI: process.env.MONGO_URI?.substring(0, 20) + '...',
});

// Add detailed environment variable logging
console.log('Environment Variables:');
console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID);
console.log('MONGO_URI:', process.env.MONGO_URI?.substring(0, 20) + '...');
console.log('PORT:', process.env.PORT);
console.log('SESSION_SECRET:', process.env.SESSION_SECRET ? '[SET]' : '[NOT SET]');
console.log('JWT_SECRET:', process.env.JWT_SECRET ? '[SET]' : '[NOT SET]');

const app = express();

console.log('Attempting to connect to MongoDB...');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
})
.then(() => {
  console.log('Successfully connected to MongoDB');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, req.body);
  next();
});

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Frontend URL: http://localhost:5173`);
});
