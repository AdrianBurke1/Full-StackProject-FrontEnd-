import React, { useState } from 'react';
import './TechSidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

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

  // Calendar data and days of the week
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const calendarData = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, null, null, null, null],
  ];

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
        <button className="sidebar-button">Events</button>
        <button className="sidebar-button">Groups</button>
      </div>

      {/* Calendar */}
      <div className="calendar">
        <h3 className="text-center mb-3"></h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              {daysOfWeek.map((day, index) => (
                <th key={index} scope="col">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendarData.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <td key={dayIndex} className={`text-center ${day === null ? 'bg-light' : ''}`}>
                    {day}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TechSidebar;
