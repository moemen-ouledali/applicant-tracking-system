import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Landing page Components/LandingPage'; // Your component paths might differ
import LoggedOutNav from './components/Nav Bars Components/LoggedOutNav';
import LogoutButton from './components/Nav Bars Components/LogoutButton';
import ManagerNav from './components/Nav Bars Components/ManagerNav';
import CandidateNav from './components/Nav Bars Components/CandidateNav';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/nav" element={<LoggedOutNav />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;