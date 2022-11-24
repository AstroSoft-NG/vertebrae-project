import { Link } from 'react-router-dom';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const AccountRecovery = () => {
  return (
    <>
      <Menu pageTitle='' />
      <section className='signup-page-form'>
        <article className='recovery-page-header'>
          <h2>Account Recovery</h2>
          <p>Please enter the account's email address and we will send you an OTP</p>
        </article>
        <form className='signup-form'>
          <div className='field'>
            <label>Email Address</label>
            <br />
            <input type='email' placeholder='ab@gmail.com' name='email'></input>
            <div className='errors'>
              <p></p>
            </div>
          </div>

          <button type='submit' className='signup-submit'>
            Recover Account
          </button>
        </form>
        <Link to='/products' className='product-link'>
          Go back to store
        </Link>
        <Link to='/login' className='signin-link'>
          Don,t have an account? Create one
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default AccountRecovery;
