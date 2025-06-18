import React from 'react';
import './Home.css'; // Import your CSS file for styling
import TechSidebar from './TechSidebar';

function Home() {
  return (
    <div className="home">
      <div className="header">
        {/* Header component or logo */}
        <h1>Welcome To Tech Space</h1>
      </div>
      <TechSidebar />
      <div className="main-content">
        {/* Sidebar component */}
      </div>
    </div>
  );
}

export default Home;
