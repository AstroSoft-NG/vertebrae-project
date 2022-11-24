import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Cart from '../../components/Cart';
import { AppContext } from '../../appContext/AppContext';
const SignUP = () => {
  const { isCartOpen } = useContext(AppContext);

  return (
    <>
      <Menu pageTitle='Products' />
      {isCartOpen && <Cart />}
      <section className='signup-page-form'>
        <h2>Sign UP</h2>
        <form className='signup-form'>
          <div className='username-container'>
            <div className='username '>
              <label>First Name</label>
              <br />
              <input type='text' placeholder='David' name='firstName'></input>
              <div className='errors'>
                <p></p>
              </div>
            </div>
            <div className='username'>
              <label>Last Name</label>
              <br />
              <input type='text' placeholder='Ukperi' name='lastName'></input>
              <div className='errors'>
                <p></p>
              </div>
            </div>
          </div>
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
            Create Account
          </button>
        </form>
        <Link to='/products' className='product-link'>
          Go back to store
        </Link>
        <Link to='/login' className='signin-link'>
          Already have an account? Sign in
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default SignUP;
