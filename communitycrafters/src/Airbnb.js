// import React, { useState, useEffect } from 'react';
// import './Airbnb.css';
// import Navbar from './Navbar';

// function AirbnbList() {
//   const [airbnbs, setAirbnbs] = useState([]);
//   // const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAirbnbs = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:5000/airbnbs');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         setAirbnbs(data.airbnbs);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchAirbnbs();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//         <h1>Looking for another type of service?
//          Maybe Airbnb's? Say less, cause we here at CommunityCrafters got you</h1>
//       <h2>Airbnb Listings</h2>
//       <div className='airbnb'>
//       <ul>
//         {airbnbs.map((airbnb) => (
//           <li key={airbnb.id}>
//             <h2>{airbnb.name}</h2>
//             <img src={airbnb.image} alt={airbnb.name} />
//             <p>{airbnb.location}</p>
//             <p>{airbnb.description}</p>
//             <p>{airbnb.price}</p>
//           </li>
//         ))}
//       </ul>                                                                                                                                                                                                                                                                                                                                                                                                
//       </div>
//     </div>
//   );
// }

// export default AirbnbList;

import React, { useState, useEffect } from 'react';
import './Airbnb.css';
import Navbar from './Navbar';

function AirbnbList() {
  const [airbnbs, setAirbnbs] = useState([]);
  const [selectedAirbnb, setSelectedAirbnb] = useState(null);

  useEffect(() => {
    const fetchAirbnbs = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/airbnbs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setAirbnbs(data.airbnbs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAirbnbs();
  }, []);

  const handleMoreInfo = (airbnb) => {
    setSelectedAirbnb(airbnb);
  };

  const handleCloseSidebar = () => {
    setSelectedAirbnb(null);
  };

  return (
    <div>
      <Navbar />
      <h1>Looking for another type of service? Maybe Airbnb's? Say less, cause we here at CommunityCrafters got you</h1>
      <h2>Airbnb Listings</h2>
      <div className='airbnb'>
        <ul>
          {airbnbs.map((airbnb) => (
            <li key={airbnb.id}>
              <h2>{airbnb.name}</h2>
              <img src={airbnb.image} alt={airbnb.name} />
              <button onClick={() => handleMoreInfo(airbnb)} className="learn-more">
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
  <span className="button-text">Learn More</span>
</button>
            </li>
          ))}
        </ul>
      </div>

      {selectedAirbnb && (
        <div className="sidebar">
          <button onClick={handleCloseSidebar}
           class="close-button">
            <span class="X"></span>
            <span class="Y"></span>
            <div class="close">Close</div>
          </button>
          <br />
          <br />
          <h2>{selectedAirbnb.name}</h2>
          <img src={selectedAirbnb.image} alt={selectedAirbnb.name} />
          <p>{selectedAirbnb.location}</p>
          <p>{selectedAirbnb.description}</p>
          <p>{selectedAirbnb.price}</p>
          <br />
          <a class="fancy" href="/AirbnbBooking">Book Now
  <span class="top-key"></span>
  <span class="bottom-key-1"></span>
  <span class="bottom-key-2"></span>
</a>
        </div>
      )}
    </div>
  );
}

export default AirbnbList;
