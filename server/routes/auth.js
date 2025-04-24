import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    if (!email || !password || !name) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
      name
    });

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({
      success: true,
      message: 'Sign up successful',
      token,
      user: {
        _id: user._id,
        email: user.email,
        name: user.name
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Error during signup', error: err.message });
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      message: 'Sign in successful',
      token,
      user: {
        _id: user._id,
        email: user.email,
        name: user.name
      }
    });
  } catch (err) {
    console.error('Sign in error:', err);
    res.status(500).json({ message: 'Error during signin', error: err.message });
  }
});

// Google authentication routes
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/signin' }),
  async (req, res) => {
    try {
      const token = jwt.sign(
        { userId: req.user._id },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );
      
      // Set token in cookie or send to client
      res.cookie('token', token, { httpOnly: true });
      res.redirect('/');
    } catch (err) {
      console.error('Google callback error:', err);
      res.redirect('/signin?error=auth_failed');
    }
  }
);

export default router;
