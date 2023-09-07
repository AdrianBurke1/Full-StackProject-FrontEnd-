// Header.js

import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">Tech Space</div>
      <div className="title">
        {/* <h2>Header Component</h2> */}
      </div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Notifications</a>
        <a href="#">Messages</a>
      </div>
    </div>
  );
}

export default Header;
