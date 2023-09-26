import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Home from './Home';
import Booking from './Booking';
import Admin from './Admin';
import 'admin-lte/dist/js/adminlte.min.js';


function App() {
  return (
    
   <Router>
    <div className="App">
   <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Booking" element={<Booking />} />
      <Route path="/Admin" element={<Admin />} />
     </Routes>
     </div>
   </Router>

    
  );
}

export default App;
