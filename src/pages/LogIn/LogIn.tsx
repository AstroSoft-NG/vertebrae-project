import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Cart from '../../components/Cart';
import { AppContext } from '../../appContext/AppContext';

const LogIn = () => {
  const { isCartOpen } = useContext(AppContext);

  return (
    <>
      <Menu pageTitle='' />
      {isCartOpen && <Cart />}
      <section className='signup-page-form'>
        <h2>Login</h2>
        <form className='signup-form'>
          <div className='field'>
            <label>Email Address</label>
            <br />
            <input type='email' placeholder='ab@gmail.com' name='email'></input>
            <div className='errors'>
              <p></p>
            </div>
          </div>
          <div className='field'>
            <label>Password</label>
            <br />
            <input type='password' name='password' placeholder='****'></input>
            <div className='errors'>
              <p></p>
            </div>
          </div>
          <button type='submit' className='signup-submit'>
            Sign in
          </button>
        </form>
        <Link to='/products' className='product-link'>
          Go back to store
        </Link>
        <Link to='/login' className='signin-link'>
          Don,t have an account? Sign up
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default LogIn;
