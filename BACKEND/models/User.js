const mongoose = require('mongoose');

// Schema definition for a user
const userSchema = new mongoose.Schema({
  role: { type: String, required: true, enum: ['Candidate', 'Manager'] },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  city: { type: String, required: true },
  highestEducationLevel: {
    type: String,
    required: true,
    enum: ['Baccalaureate', 'Licence', 'Engineering']
  }
}, { timestamps: true });

// Model creation based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
