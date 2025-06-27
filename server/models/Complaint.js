const mongoose = require('mongoose');
const complaintSchema = new mongoose.Schema({
  name: { type: String, required: true },
  college: { type: String, required: true },
  year: { type: Number, required: true },
  gender: { type: String, required: true },
  branch: { type: String, required: true },
  place: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Complaint', complaintSchema);