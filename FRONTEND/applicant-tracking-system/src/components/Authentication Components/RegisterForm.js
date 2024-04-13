import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [highestEducationLevel, setHighestEducationLevel] = useState('Baccalaureate');
  const [role, setRole] = useState('Candidate');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/user/register', {
        firstName,
        lastName,
        email,
        dateOfBirth,
        password,
        phoneNumber,
        city,
        highestEducationLevel,
        role,
      });

      setMessage('Registration successful');
      navigate('/login'); // Adjust if needed
    } catch (error) {
      setMessage("Registration failed. Please try again.");
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} placeholder="Date of Birth" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" required />
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
        <select value={highestEducationLevel} onChange={(e) => setHighestEducationLevel(e.target.value)}>
          <option value="Baccalaureate">Baccalaureate</option>
          <option value="Licence">Licence</option>
          <option value="Engineering">Engineering</option>
        </select>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Candidate">Candidate</option>
          <option value="Manager">Manager</option>
        </select>
        <button type="submit">Register</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
