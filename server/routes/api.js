const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');

router.post('/complaints', async (req, res) => {
  const complaint = new Complaint(req.body);
  await complaint.save();
  res.status(201).send(complaint);
});

router.get('/complaints', async (req, res) => {
  const complaints = await Complaint.find();
  res.send(complaints);
});

module.exports = router;