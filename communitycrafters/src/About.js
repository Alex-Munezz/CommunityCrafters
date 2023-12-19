import React from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const AboutPage = () => {
  return (
    <div className="about-container">
        <div className="nb">
      <Navbar /></div>
      <h1>About Us</h1>
      <p className='about-p'>
        Welcome to our community! We are dedicated to providing high-quality services
        and creating a positive environment for our users.
      </p>
      <p className='about-p'>
        Our mission is to build a platform where individuals can connect, share their
        experiences, and find the services they need.
      </p>
      <p className='about-p'>
        Feel free to explore our website and discover the amazing features we offer.
        If you have any questions or suggestions, don't hesitate to contact us.
      </p>
      <br />
      <br />
      <footer className='about-footer'>
      <div>
        <div>
           <p>Contact Us :</p>
            <p className='email'>Email: info@communitycrafters.com</p>
            <p className='phone'>Phone: 0 (+254) 768-453442</p>
          </div>
          <div>
            <p>Follow Us :</p>
            <div>
              <a
                href="https://www.twitter.com/_mu_nezz_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
                <span>Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/__n.3.z.z__"
                target="_blank"
                rel="noopener noreferrer"
              > 
              <br /><br/>
                <FontAwesomeIcon icon={faInstagram} size="lg"/>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <p>
          &copy; 2023 CommunityCrafters. All rights reserved.
        </p>
      
    </footer>
    </div>
  );
};

export default AboutPage;
