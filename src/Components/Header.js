import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your CSS file

// Import the image
import TechSpaceImage from '../images/Tech_Space-removebg-preview.png';




function Header() {
  return (
    <div className="header">
      <img
        className="header-image"
        src={TechSpaceImage} // Use the imported image as the source
        alt="Tech Space Logo"
      />
      <div className="title"></div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Log In</Link> {/* Add the Login link */}
        {/* <Link to="signup"> Sign Up</Link> */}
        {/* Add other navigation links */}
      </div>
      <div className="page-content"></div>
    </div>
  );
}

export default Header;