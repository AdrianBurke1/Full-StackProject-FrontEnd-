import React, { useState } from 'react';
import './TechSidebar.css'; // Import your CSS file

function TechSidebar() {
  const techWebsites = [
    { name: 'Structy', url: 'https://structy.net' },
    { name: 'Chat GPT', url: 'https://chat.openai.com/#' },
    { name: 'Code Academy', url: 'https://www.codecademy.com' },
    { name: 'YouTube', url: 'https://www.youtube.com' },
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
          <option value="">Select a Tech Website</option>
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
      <div className="button-column">
      <button className="sidebar-button">Post</button>
        <br></br>
        <button className="sidebar-button">Log In</button>
        <br></br>
        <button className="sidebar-button">Sign Up</button>
        <br></br>
        <button className="sidebar-button">History</button>
        <br></br>
      </div>
      <hr className="divider" />
      
    </div>
  );
}

export default TechSidebar;