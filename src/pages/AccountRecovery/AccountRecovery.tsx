import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import { FormValuesType } from '../../services/models';

const AccountRecovery = () => {
  const formik = useFormik({
    initialValues: { email: '' },
    onSubmit: (values) => {
      console.log('Submitted ', values);
    },
    validate: (values) => {
      const errors: FormValuesType = {};

      if (!values.email) {
        errors.email = 'Email name is required';
      }

      return errors;
    },
  });
  return (
    <>
      <Menu />
      <section className='signup-page-form'>
        <article className='recovery-page-header'>
          <h2>Account Recovery</h2>
          <p>Please enter the account's email address and we will send you an OTP</p>
        </article>
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
