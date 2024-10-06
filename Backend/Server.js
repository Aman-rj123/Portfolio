const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();  // Load environment variables from .env

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Welcome to the Backend Service!');
});



// Nodemailer transporter setup using Gmail's SMTP credentials
const transporter = nodemailer.createTransport({
  service: 'gmail', // Using Gmail service
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_PASS, // App password or Less secure app password
  },
});

// API route to handle contact form submissions
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,  // Sender's email address (from form)
    to: 'amanraj840984@gmail.com',  // Replace with the email you want to receive messages at
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email using the transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Failed to send message.');
    }
    res.status(200).send('Message sent successfully!');
  });
});

// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
