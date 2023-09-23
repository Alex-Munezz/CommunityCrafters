import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();  

    setUsername('');
    setPassword('');
    setPhoneNumber('');
    setEmail('');

    setShowNotification(true);

    setTimeout(() => {
        navigate('/Home');
      }, 2000);


  };

  return (
    <div>
        <h1>Thank you for wanting to be part of our journey!!</h1>

     

      <div id="form-ui">
    <form action="" method="post" id="form" onSubmit={handleCreateAccount}>
      <div id="form-body">
        <div id="welcome-lines">
          <div id="welcome-line-1">Create Account</div>
          <div id="welcome-line-2">We only require a few details from you and it takes just takes a few seconds😊</div>
        </div>
        <div id="input-area">
          <div class="form-inp">
            <input placeholder="Username" 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
          </div>
          <div class="form-inp">
            <input placeholder="Email Adress" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
          </div>
          <div class="form-inp">
            <input placeholder="Phone number" 
            type="number"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            />
          </div>
          <div class="form-inp">
            <input placeholder="Password" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
          </div>
        </div>
        <div id="submit-button-cvr">
          <button id="submit-button" type="submit">Login</button>
        </div>
        <div id="bar"></div>
      </div>
    </form>
    </div>
  

  


      {showNotification && (
        <p className="success-notification">Account created successfully! Thank you for being part of our journey!!😃</p>
      )}
    </div>
  );
}

export default CreateAccount;
