const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Email Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// API Routes
app.use('/api', require('./routes/api'));

// Email Alert on Complaint Submission
app.post('/api/complaints', async (req, res) => {
  const complaint = new Complaint(req.body);
  await complaint.save();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'anti-ragging-committee@example.com', // Replace with actual email
    subject: 'New Ragging Complaint',
    text: `New complaint from ${req.body.name}:\nPlace: ${req.body.place}\nDescription: ${req.body.description}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    else console.log('Email sent: ' + info.response);
  });

  res.status(201).send(complaint);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));