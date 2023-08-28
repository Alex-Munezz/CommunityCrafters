import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-black py-8">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="font-semibold text-lg">Contact Us :</p>
            <p>Email: info@CommunityCrafters.com</p>
            <p>Phone: 0 (+254) 768-453442</p>
          </div>
          <div className="text-center md:text-right mb-4 md:mb-0">
            <p className="font-semibold text-lg">Follow Us :</p>
            <div className="flex justify-center md:justify-end mt-2">
              <a
                href="https://www.twitter.com/_mu_nezz_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-300 mr-4"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
                <span className="ml-2">Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/__n.3.z.z__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-white-300"
              > 
              <br /><br/>
                <FontAwesomeIcon icon={faInstagram} size="lg"/>
                <span className="ml-2">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-6" />
        <p className="text-center text-black">
          &copy; 2023 CommunityCrafters. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;