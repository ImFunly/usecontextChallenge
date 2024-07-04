import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MyJob from '../pages/MyJob';

const RoutesApp = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Perfil</Link>
        <Link to="/myjob">Mi trabajo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myjob" element={<MyJob />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
