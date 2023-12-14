import { Link } from 'react-router-dom';
import './Home.css';
import Airbnb from './Airbnb.js';
import React, { useState, useEffect } from 'react';

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <img src={service.service_image} alt={service.service_name} />
      <br />
      <h2>{service.service_name}</h2>
      <p>{service.service_description}</p>

      <Link to={`/booking?serviceName=${service.service_name}`}>
        <button className="cta">
          <span>Book Appointment</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </Link>
    </div>
  );
}

function Home() {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after 5000 milliseconds (5 seconds)
    }, 5000);

    fetch('http://127.0.0.1:5000/services')
      .then((response) => response.json())
      .then((data) => {
        setServices(data.services);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const servicelist = services.filter((service) =>
    service.service_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1>View CommunityCrafters Marketplace!</h1>

      <div className="input-wrapper">
        <button className="icon">
          {/* Your search icon SVG */}
        </button>
        <input
          placeholder="search.."
          className="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          name="text"
          type="text"
        />
      </div>
      <br />
      <br />
      <div className="featured-services">
        {loading ? (
          // Display a loading message or spinner while loading is true
          <div className="loading">
            <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
	<circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
	<circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
	<circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
	<circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
</svg>
          </div>
        ) : (
          // Render service cards when loading is false
          servicelist.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        )}
      </div>
      <br />
      <br />
      <div className='airbnb'>
        <Airbnb />
      </div>
    </div>
  );
}

export default Home;
