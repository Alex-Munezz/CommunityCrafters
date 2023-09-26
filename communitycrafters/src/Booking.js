import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Booking() {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);

  // Sample service data for demonstration
  const serviceData = {
    id: serviceId,
    name: 'Sample Service',
    // Add other service details here
  };

  useEffect(() => {
    // In a real application, you would fetch the service details based on serviceId
    // You can use an API call or a database query for this purpose
    // For this example, we'll use the sample serviceData
    setService(serviceData);
  }, [serviceId]);

  // State to store booking details
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
    // Add more booking fields as needed
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  // Handle form submission (you can implement your own logic here)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your booking submission logic here
    console.log('Booking details:', bookingDetails);
  };

  return (
    <div>
      {/* Render the booking form with service details */}
      {service && (
        <div>
          <h2>{service.name}</h2>
          {/* Render other service details */}
          {/* For example: <p>Description: {service.description}</p> */}
          <form onSubmit={handleSubmit}>
            {/* Input fields for booking details */}
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={bookingDetails.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={bookingDetails.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={bookingDetails.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Time:</label>
              <input
                type="time"
                name="time"
                value={bookingDetails.time}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <button type="submit">Book Now</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Booking;
