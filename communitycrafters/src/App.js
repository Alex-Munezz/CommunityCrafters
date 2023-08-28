import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Home from './Home';

function App() {
  return (
    
   <Router>
    <div className="App">
   <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
      <Route path="/Home" element={<Home />} />
     </Routes>
     </div>
   </Router>

    
  );
}

export default App;
