import React from 'react';
import { useFormik } from 'formik';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import { FormValuesType } from '../../services/models';

const FinalRecoveryPage = () => {
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
      <Menu />
      <section className='signup-page-form'>
        <article className='recovery-page-header'>
          <h2>Account Recovery</h2>
          <p>Set your new Password</p>
        </article>
        <form onSubmit={formik.handleSubmit} className='signup-form'>
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
            Set Password
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default FinalRecoveryPage;
