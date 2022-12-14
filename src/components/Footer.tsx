import React from 'react';
import { Link } from 'react-router-dom';

import productsLogo from '../assets/images/image 1.png';
const Footer: React.FC = () => {
  return (
    <footer className='products-footer'>
      <Link to='/privacypolicy' className='footer-link'>
        Privacy Policy
      </Link>
      <Link to='' className='footer-link'>
        Terms and Conditions
      </Link>
      <Link to='/info' className='footer-link'>
        Info
      </Link>
      <Link to='/' className='footer-link'>
        <img src={productsLogo} alt='Products Logo' />
      </Link>
    </footer>
  );
};

export default Footer;
