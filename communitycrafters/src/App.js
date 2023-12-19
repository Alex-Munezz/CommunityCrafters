import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Home from './Home';
import Booking from './Booking';
import Admin from './Admin';
import Dashboard from './Dashboard';
import { AuthProvider } from './AuthContext';
import './App.css';
import AboutPage from './About';
import AirbnbList from './Airbnb';
import AirbnbBooking from './AirbnbBooking';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/Airbnb' element={<AirbnbList />} />
            <Route path='/AirbnbBooking' element={<AirbnbBooking/>} />
            <Route path="/" element={<LandingPage />} />
            <Route path='/About' element={<AboutPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
