import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Login from './Components/Login';
import TechSidebar from './Components/TechSidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <TechSidebar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
