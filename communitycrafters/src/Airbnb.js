import React, { useState, useEffect } from 'react';
import './Airbnb.css';

function AirbnbList() {
  const [airbnbs, setAirbnbs] = useState([]);
  // const [loading, setLoading] = useState(true);

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

  return (
    <div>
        <h1>Looking for another type of service?
         Maybe Airbnb's? Say less, cause we here at CommunityCrafters got you</h1>
      <h2>Airbnb Listings</h2>
      <div className='airbnb'>
      <ul>
        {airbnbs.map((airbnb) => (
          <li key={airbnb.id}>
            <h2>{airbnb.name}</h2>
            <img src={airbnb.image} alt={airbnb.name} />
            <p>{airbnb.location}</p>
            <p>{airbnb.description}</p>
            <p>{airbnb.price}</p>
          </li>
        ))}
      </ul>                                                                                                                                                                                                                                                                                                                                                                                                
      </div>
    </div>
  );
}

export default AirbnbList;