import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();  

    setShowNotification(true);

    setTimeout(() => {
        navigate('/Home');
      }, 2000);

    setUsername('');
    setPassword('');
    setEmail('');
  };

  return (
    <div className="create-account-container">
        <h1>Thank you for wanting to be part of our journey!!</h1>
      <h2>Create Account</h2>
      <form onSubmit={handleCreateAccount}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="create-account-button">
          Create Account
        </button>
      </form>
      {showNotification && (
        <p className="success-notification">Account created successfully!</p>
      )}
    </div>
  );
}

export default CreateAccount;
