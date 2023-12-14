// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CreateAccount.css';

// function CreateAccount() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone_number, setPhoneNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [showNotification, setShowNotification] = useState(false);
//   const navigate = useNavigate();

//   const handleCreateAccount = (e) => {
//     e.preventDefault();  

//     setUsername('');
//     setPassword('');
//     setPhoneNumber('');
//     setEmail('');

//     setShowNotification(true);

//     setTimeout(() => {
//         navigate('/Home');
//       }, 2000);


//   };

//   return (
//     <div>
//         <h1>Thank you for wanting to be part of our journey!!</h1>

     

//       <div id="form-ui">
//     <form action="" method="post" id="form" onSubmit={handleCreateAccount}>
//       <div id="form-body">
//         <div id="welcome-lines">
//           <div id="welcome-line-1">Create Account</div>
//           <div id="welcome-line-2">We only require a few details from you and it takes just takes a few seconds😊</div>
//         </div>
//         <div id="input-area">
//           <div class="form-inp">
//             <input placeholder="Username" 
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             />
//           </div>
//           <div class="form-inp">
//             <input placeholder="Email Adress" 
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             />
//           </div>
//           <div class="form-inp">
//             <input placeholder="Phone number" 
//             type="number"
//             value={phone_number}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//             />
//           </div>
//           <div class="form-inp">
//             <input placeholder="Password" 
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             />
//           </div>
//         </div>
//         <div id="submit-button-cvr">
//           <button id="submit-button" type="submit">Login</button>
//         </div>
//         <div id="bar"></div>
//       </div>
//     </form>
//     </div>
  

  


//       {showNotification && (
//         <p className="success-notification">Account created successfully! Thank you for being part of our journey!!😃</p>
//       )}
//     </div>
//   );
// }

// export default CreateAccount;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [showNotification2, setShowNotification2] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/create_account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname,
          lastname,
          username,
          password,
          phone_number,
          email,
        }),
      });

      if (!response.ok) {
        throw new Error('Error creating account');
      }
      setShowNotification(true);
      // If the request is successful, navigate to the Home page
      setTimeout(() => {
        navigate('/Home');
      }, 3000);
    } catch (error) {
      console.error('Error creating account:', error);
      // Handle error, show error message, etc.
      setShowNotification2(true);
    }
  };

  return (
    <div className='create-account-page'>
       <div id="form-ui">
        <form action="" method="post" id="form" onSubmit={handleCreateAccount}>
          <div id="form-body">
            <div id="welcome-lines">
              <div id="welcome-line-1">Create Account</div>
              <div id="welcome-line-2">We only require a few details from you and it takes just takes a few seconds😊</div>
            </div>
            <div id="input-area">
            <h4>Firstname</h4>
            <div class="form-inp">
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div><br />
              <h4>Lastname</h4>
              <div class="form-inp">
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div><br />
              <h4>Username</h4>
              <div class="form-inp">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div><br />
              <h4>Email</h4>
              <div class="form-inp">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div><br />
              <h4>Phone Number</h4>
              <div class="form-inp">
                <input
                  type="number"
                  value={phone_number}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div><br />
              <h4>Password</h4>
              <div class="form-inp">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div id="submit-button-cvr">
              <button id="submit-button" type="submit">Create Account</button>
            </div>
          </div>
        </form>
      </div>
      {showNotification && <p className="success-notif">Thank you 
      for being part of our transformative journey!!</p>}
      {showNotification2 && (
        <p className="error-notification">Error creating account. Please try again.</p>
      )}
    </div>
  );
}

export default CreateAccount;

