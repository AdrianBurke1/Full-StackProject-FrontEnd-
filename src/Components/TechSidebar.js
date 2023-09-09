import React, { useState } from 'react';
import './TechSidebar.css'; // Import your CSS file

function TechSidebar() {
  const techWebsites = [
    { name: 'Algorithms & Data Structure', url: 'https://structy.net' },
    { name: 'Chat GPT', url: 'https://chat.openai.com/auth/login' },
    { name: 'Code Academy', url: 'https://www.codecademy.com' },
    { name: 'YouTube', url: 'https://www.youtube.com' },
    { name: 'LeetCode', url: 'https://leetcode.com/' },
    // Add more tech website objects here
  ];

  const [selectedUrl, setSelectedUrl] = useState(null);

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedUrl(selectedValue);
  };

  return (
    <div className="sidebar">
      <div className="tech-dropdown-container">
        <select className="tech-dropdown" onChange={handleDropdownChange} value={selectedUrl}>
          <option value="">Learn To Code</option>
          {techWebsites.map((website, index) => (
            <option key={index} value={website.url}>
              {website.name}
            </option>
          ))}
        </select>
        {selectedUrl && (
          <p>
            Start your journey <a href={selectedUrl} target="_blank" rel="noopener noreferrer">{selectedUrl}</a>
          </p>
        )}
      </div>
      <hr className="divider" />
      <div className="button-container">
        <button className="sidebar-button">Post</button>
        <br />
        <button className="sidebar-button">Events</button>
        <br />
        <button className="sidebar-button">Groups</button>
        <br />
      </div>
      <hr className="divider" />
    </div>
  );
}

export default TechSidebar;