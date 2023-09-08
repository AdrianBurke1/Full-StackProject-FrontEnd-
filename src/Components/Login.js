import React, { useState } from 'react';
import './Login.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Add logic to validate and authenticate the user
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <div className="login-form">
        <input
          type="text"
          placeholder="Username or Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link> {/* Link to Sign Up page */}
        </p>
      </div>
    </div>
  );
}

export default Login;
