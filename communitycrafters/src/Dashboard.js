import React, { useState, useEffect } from 'react';
// import { useAuth } from './AuthContext';
import './Dashboard.css';

function UserDashboard() {
//   const { username } = useAuth();  // Get the username using useAuth
  const [users, setUserDetails] = useState({});
//   const [bookedServices, setBookedServices] = useState([]);
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make sure username is available
    // if (!username) {
    //   return;
    // }

    // Fetch user details
    fetch(`http://127.0.0.1:5000/users`)
      .then((response) => response.json())
      .then((data) => {
        setUserDetails(data.user);
        // setLoading(false);
      })
      .catch((error) => console.error('Error fetching user details:', error));

    // Fetch booked services
//     fetch(`http://127.0.0.1:5000/booked_services/${username}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setBookedServices(data.services);
//       })
//       .catch((error) => console.error('Error fetching booked services:', error));
//   }, [username]);
    });

  return (
    <div className="user-dashboard-container">
<div className="user-dashboard">
  <ul>
    {Array.isArray(users) && users.map((user) => (
      <li key={user.id}>
        <h2>{user.username}</h2>
        <p>{user.email}</p>
        <p>{user.phone_number}</p>
      </li>
    ))}
  </ul>
</div>


      {/* <div className="booked-services">
        <h2>Your Booked Services</h2>
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <ul>
            {bookedServices.map((service) => (
              <li key={service.id}>
                <div className="booked-service-card">
                  <img src={service.service_image} alt={service.service_name} />
                  <h3>{service.service_name}</h3>
                  <p>{service.service_description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </div>
  );
}

export default UserDashboard;
