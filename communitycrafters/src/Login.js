import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showNotification1, setShowNotification1] = useState(false);
  const [showNotification2, setShowNotification2] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.01.:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid username or password');
        
      }
      setShowNotification1(true);

      // If the request is successful, navigate to the Home page
      setTimeout(() => {
        
        navigate('/Home');
      }, 3000);
    
    } catch (error) {
      console.error('Error logging in:', error);
      
      setShowNotification2(true);
    }
  };

  return (
    <div className='login-page'>
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Enter your username"
        />

        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />

        <button className='login-button' type="submit">Submit</button>
      </form>
      {showNotification1 && <p className="success-notification">Welcome back 🤗</p>}
      {showNotification2 && <p className="error-notification">ERROR : Invalid username or password</p>}
      <br />
      <br />
    </div>
    </div>
  );
}

export default Login;
