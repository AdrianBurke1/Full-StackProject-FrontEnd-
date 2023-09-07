import React, { useState } from 'react';
import './Header.css';
import Home from './Home';
import Profile from './Profile';
import Notifications from './Notifications';
import Messages from './Messages';

function Header() {
  const [selectedPage, setSelectedPage] = useState('Home');

  const renderPage = () => {
    switch (selectedPage) {
      case 'Home':
        return <Home />;
      case 'Profile':
        return <Profile />;
      case 'Notifications':
        return <Notifications />;
      case 'Messages':
        return <Messages />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="header">
      <div className="logo">Tech Space</div>
      <div className="title">
      </div>
      <div className="links">
        <a href="#" onClick={() => setSelectedPage('Home')}>Home</a>
        <a href="#" onClick={() => setSelectedPage('Profile')}>Profile</a>
        <a href="#" onClick={() => setSelectedPage('Notifications')}>Notifications</a>
        <a href="#" onClick={() => setSelectedPage('Messages')}>Messages</a>
      </div>
      <div className="page-content">
        {renderPage()}
      </div>
    </div>
  );
}

export default Header;