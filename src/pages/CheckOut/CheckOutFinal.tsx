import React from 'react';
import { useFormik } from 'formik';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import { FormValuesType } from '../../services/models';

const CheckOutFinal = () => {
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
    <div>
      <Menu />
      <section className='checkout-final-details'>
        <h2>Payment</h2>
        <form className='signup-form'>
          <div className='field'>
            <label>Card Number</label>
            <br />
            <input type='password' placeholder='' name='email'></input>
            <div className='errors'>
              <p></p>
            </div>
          </div>
          <div className='username-container'>
            <div className='username '>
              <label>Cvv</label>
              <br />
              <input
                type='text'
                placeholder='David'
                name='firstName'
                //   value={formik.values.firstName}
                //   onChange={formik.handleChange}
                //   onBlur={formik.handleBlur}
              ></input>
              <div className='errors'>
                <p>
                  {/* {formik.values.firstName && formik.touched.firstName && formik.errors.firstName} */}
                </p>
              </div>
            </div>
            <div className='username'>
              <label>Expiry Date</label>
              <br />
              <input
                type='date'
                placeholder='Ukperi'
                name='expiryDate'
                //   value={formik.values.}
                //   onChange={formik.handleChange}
                //   onBlur={formik.handleBlur}
              ></input>
              <div className='errors'>
                {/* <p>{formik.values.lastName && formik.touched.lastName && formik.errors.lastName}</p> */}
              </div>
            </div>
          </div>
          <button type='submit' className='signup-submit'>
            Sign in
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default CheckOutFinal;
