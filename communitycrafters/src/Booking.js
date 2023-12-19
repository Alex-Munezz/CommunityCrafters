import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Booking.css';

function Booking() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialServiceName = queryParams.get('serviceName');

  const [bookingDetails, setBookingDetails] = useState({
    username: '',
    email: '',
    service_name: initialServiceName || '',
    booking_date: '',
    booking_time: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      username: bookingDetails.username,
      email: bookingDetails.email,
      service_name: bookingDetails.service_name,
      booking_date: bookingDetails.booking_date,
      booking_time: bookingDetails.booking_time,
    };

    fetch('http://127.0.0.1:5000/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
    .then((response) => {
      if (response.status === 200) {
        toast.success('Booking successful!', {
          position: 'top-right',
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
          
      } else {
        toast.error('Booking failed. Please try again. If the error persists, please contact our support team.', {
          position: 'top-right',
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      console.error('Error during booking:', error);
      toast.error('An error occurred. Please try again. If the issue persists, please contact our support team.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};

  return (
    <div>
      <div className="booking-container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 className="booking-title">Booking for {bookingDetails.service_name}</h2>
        <form onSubmit={handleSubmit}>
        <br />
          <div>
            <label className="label">Username:</label><br /><br />
            <input
              className="input"
              type="text"
              name="username"
              value={bookingDetails.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="label">Email:</label><br /><br />
            <input
              className="input"
              type="email"
              name="email"
              value={bookingDetails.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="label">Service Name:</label><br /><br />
            <input
              className="input"
              type="text"
              name="service_name"
              value={bookingDetails.service_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <br />
            <label className="label">Booking Date:</label><br /><br />
            <input
              className="input"
              type="date"
              name="booking_date"
              value={bookingDetails.booking_date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="label">Booking Time:</label><br /><br />
            <input
              className="input"
              type="time"
              name="booking_time"
              value={bookingDetails.booking_time}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
          <button className='booking-button'>
    <span>Book</span>
    <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
    </svg>
</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Booking;
