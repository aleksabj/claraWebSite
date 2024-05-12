// Import required modules
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Create an instance of express
const app = express();
const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));  
// Middleware to parse JSON bodies from HTTP requests
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // replace with your email service
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Jurnalist1',
  database: 'test'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Failed to connect to the database:', err);
    process.exit(1);
  }
  console.log('Connected to the database');
});

// Middleware to protect routes
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ success: false, message: 'Forbidden' });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ success: false, message: 'Unauthorized' });
  }
};

// POST route for user registration
app.post('/register', [
    body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
  
    try {
      const { username, email, password } = req.body;
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
      db.query(query, [username, email, hashedPassword], (err) => {
        if (err) {
          if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ "success": false, message: 'Username or email already exists' });
          }
          return res.status(500).json({ "success": false, "message": 'An error occurred' });
        }
        res.json({ "success": true, "message": 'User registered successfully' });
      });
    } catch (err) {
      res.status(500).json({ success: false, message: 'An error occurred' });
    }
  });

// POST route for user login
app.post('/login', [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { username, password } = req.body;

    const query = 'SELECT password FROM users WHERE username = ?';
    db.query(query, [username], async (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'An error occurred' });
      }

      if (result.length > 0) {
        const comparison = await bcrypt.compare(password, result[0].password);
        if (comparison) {
          const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
          res.json({ success: true, message: 'Logged in successfully', token });
        } else {
          res.status(401).json({ success: false, message: 'Wrong password' });
        }
      } else {
        res.status(404).json({ success: false, message: 'User not found' });
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'An error occurred' });
  }
});

// GET route for user logout
app.get('/logout', authenticateJWT, (req, res) => {
  req.user = null;
  res.json({ success: true, message: 'Logged out successfully' });
});

// Other routes (e.g., forgot-password, reset-password) should follow the same pattern of
// using res.json() with appropriate success flags and messages.
// POST route for forgot password
app.post('/forgot-password', (req, res) => {
  const { email } = req.body;

  // Generate a random code
  const code = crypto.randomBytes(20).toString('hex');

  // Save the code in the database associated with the user's account
  const query = 'UPDATE users SET resetPasswordCode = ? WHERE email = ?';
  db.query(query, [code, email], async (err, result) => {
    if (err) {
      console.error('Failed to save reset password code:', err);
      return res.status(500).json({ success: false, message: 'An error occurred' });
    }

    // Send the code to the user's email
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: 'Reset Password',
      text: `Your reset password code is: ${code}`
    };

    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.error('Failed to send email:', err);
        return res.status(500).json({ success: false, message: 'An error occurred' });
      }
      res.json({ success: true, message: 'Reset password code sent to email' });
    });
  });
});
// POST route for reset password
app.post('/reset-password', [
  body('code').notEmpty().withMessage('Code is required'),
  body('newPassword').isLength({ min: 8 }).withMessage('New password must be at least 8 characters long'),
], async (req, res) => {
  // Handle validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { email, code, newPassword } = req.body;

  // Verify the code matches the one in the database for the user's account
  const query = 'SELECT * FROM users WHERE email = ? AND resetPasswordCode = ?';
  db.query(query, [email, code], async (err, result) => {
    if (err) {
      console.error('Failed to verify reset password code:', err);
      return res.status(500).json({ success: false, message: 'An error occurred' });
    }

    if (result.length > 0) {
      // If the code is correct, hash the new password and update it in the database
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      const updateQuery = 'UPDATE users SET password = ?, resetPasswordCode = NULL WHERE email = ?';
      db.query(updateQuery, [hashedPassword, email], (err, result) => {
        if (err) {
          console.error('Failed to reset password:', err);
          return res.status(500).json({ success: false, message: 'An error occurred' });
        }
        res.json({ success: true, message: 'Password reset successfully' });
      });
    } else {
      res.status(400).json({ success: false, message: 'Invalid code' });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});