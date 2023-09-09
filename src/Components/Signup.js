import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'; // Import withRouter for history
import './Signup.css'; // Import your CSS file

function Signup({ history }) {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your sign-up logic here (e.g., API call to create a user)
    // Assuming the sign-up logic is asynchronous, you can use a promise or async/await

    // After successfully signing up, redirect to the user's page
    // You can define the route where users should be redirected after signing up
    // For example, redirect to "/userpage" after sign-up
    // Replace this with your actual route
    history.push('/userpage');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="signup-form">
        <input
          type="text"
          className="signup-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="signup-input"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="signup-input"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="password"
          className="signup-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signup-button" onClick={handleSignup}>
          Sign Up
        </button>
      </div>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
}

export default withRouter(Signup); // Wrap the component with withRouter
