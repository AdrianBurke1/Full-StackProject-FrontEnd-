// TechSidebar.js

import React from 'react';

function TechSidebar() {
  const techWebsites = [
    { name: 'Structy', url: 'https://structy.net' },
    { name: 'Chat GPT', url: 'https://chat.openai.com/#' },
    { name: 'Code Academy', url: 'https://www.codecademy.com' },
    { name: 'YouTube', url: 'https://www.youtube.com' },
    // Add more tech website objects here
  ];

  return (
    <div className="sidebar">
      <ol>
        {techWebsites.map((website, index) => (
          <li key={index}>
            <a href={website.url} target="_blank" rel="noopener noreferrer">
              {website.name}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TechSidebar;