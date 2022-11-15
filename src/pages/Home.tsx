import React from 'react';
import { Link } from 'react-router-dom';
import whiteLogo from '../assets/images/white-logo.png';

const Home = () => {
  return (
    <section className='hero-section'>
      <Link className='hero-link' to='/products'>
        <img src={whiteLogo} alt='Hero Logo' />
      </Link>
    </section>
  );
};

export default Home;
