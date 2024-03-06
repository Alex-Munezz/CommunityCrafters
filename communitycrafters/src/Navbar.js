import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    
        const navigate = useNavigate();
        const handleLogout = () => {
        console.log('Logging out...');  
        navigate('/');
          };
          const profile = () => { 
            navigate('/Dashboard');
              };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <Link to="/home" className="navbar-link">
            Home
          </Link>
          <Link to="/Airbnb" className="navbar-link">
            Airbnb's
          </Link>
          <Link to="/About" className="navbar-link">
            About us
          </Link>
          <Link to="/About" className="navbar-link">
            About us
          </Link>
        </div>
        <div className="navbar-auth">
       
        <button class="Btn" onClick={handleLogout}>
  
  <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div class="text">Logout</div>
</button>      
        </div>
        <button class="profile-button">
 <span class="span"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 21" height="21" width="23" class="svg-icon">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="black" d="M1.97742 19.7776C4.45061 17.1544 7.80838 15.5423 11.5068 15.5423C15.2053 15.5423 18.5631 17.1544 21.0362 19.7776M16.2715 6.54229C16.2715 9.17377 14.1383 11.307 11.5068 11.307C8.87535 11.307 6.74212 9.17377 6.74212 6.54229C6.74212 3.91082 8.87535 1.77759 11.5068 1.77759C14.1383 1.77759 16.2715 3.91082 16.2715 6.54229Z"></path>
                    </svg></span>
  <span onClick={profile} className="lable"></span>
</button>
      </div>
    </nav>
  );
}

export default Navbar;
