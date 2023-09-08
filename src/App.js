import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Login from './Components/Login'; // Import the Login component

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to fetch data from the backend
    axios.get('/api/posts')
      .then((response) => {
        // Update the state with the received data
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/login" element={<Login />} /> {/* Use the "element" prop */}
          <Route path="/profile" element={<Profile />} /> {/* Use the "element" prop */}
          <Route path="/" element={<Home />} /> {/* Use the "element" prop */}
          {/* Add other routes for your pages */}
        </Routes>
        {/* Add a Login button that leads to the login page */}
      </div>
    </Router>
  );
}

export default App;
