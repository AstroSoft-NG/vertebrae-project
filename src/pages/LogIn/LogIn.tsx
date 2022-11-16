import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Cart from '../../components/Cart';
import { FormValuesType } from '../../services/models';
import { AppContext } from '../../appContext/AppContext';

const LogIn = () => {
  const { isCartOpen } = useContext(AppContext);
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (values) => {
      console.log('Submitted ', values);
    },
    validate: (values) => {
      const errors: FormValuesType = {};

      if (!values.email) {
        errors.email = 'Email name is required';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      }
      return errors;
    },
  });
  return (
    <>
      <Menu pageTitle='' />
      {isCartOpen && <Cart />}
      <section className='signup-page-form'>
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit} className='signup-form'>
          <div className='field'>
            <label>Email Address</label>
            <br />
            <input
              type='email'
              placeholder='ab@gmail.com'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>
            <div className='errors'>
              <p>{formik.values.email && formik.touched.email && formik.errors.email}</p>
            </div>
          </div>
          <div className='field'>
            <label>Password</label>
            <br />
            <input
              type='password'
              name='password'
              placeholder='****'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>
            <div className='errors'>
              <p>{formik.values.password && formik.touched.password && formik.errors.password}</p>
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
