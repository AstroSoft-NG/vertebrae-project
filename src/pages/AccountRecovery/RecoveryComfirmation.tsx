import React from 'react';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const RecoveryComfirmation = () => {
  return (
    <>
      <Menu />
      <section className='signup-page-form'>
        <article className='recovery-page-header'>
          <h2>Account Recovery</h2>
          <p>Please enter the 6 digits code sent to your email</p>
        </article>
        <form className='signup-form'>
          <div className='field'>
            <label>Email Address</label>
            <br />
            <input type='email' placeholder='ab@gmail.com' name='email'></input>
          </div>

          <button type='submit' className='signup-submit'>
            Continue
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default RecoveryComfirmation;
