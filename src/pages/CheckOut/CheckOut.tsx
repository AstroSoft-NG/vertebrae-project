import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const CheckOut = () => {
  const navigate = useNavigate();
  const handleCheckOutFinal = () => {
    navigate('/checkoutfinal');
  };
  const formik = useFormik({
    initialValues: { firstName: '', lastName: '', email: '', password: '' },
    onSubmit: (values) => {
      console.log('Submitted ', values);
    },
    // validate: (values) => {
    //   const errors: FormValuesType = {};

    //   if (!values.firstName) {
    //     errors.firstName = 'First name is required';
    //   }
    //   if (!values.lastName) {
    //     errors.lastName = 'Last name is required';
    //   }
    //   if (!values.email) {
    //     errors.email = 'Last name is required';
    //   }
    //   if (!values.password) {
    //     errors.password = 'Password is required';
    //   }
    //   return errors;
    // },
  });
  return (
    <div>
      <Menu />
      <section className='checkout-details'>
        <div className='process-indicator'>1/2</div>
        <h2 className='checkout-header'>Contact Info</h2>
        <form onSubmit={formik.handleSubmit} className='signup-form'>
          <div className='username-container'>
            <div className='username '>
              <label>Email</label>
              <br />
              <input
                type='email'
                placeholder='abc@gmail.com'
                name='firstName'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              <div className='errors'>
                <p>
                  {formik.values.firstName && formik.touched.firstName && formik.errors.firstName}
                </p>
              </div>
            </div>
            <div className='username'>
              <label>Phone Number</label>
              <br />
              <input
                type='tel'
                placeholder='+2349022946610'
                name='lastName'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              <div className='errors'>
                <p>{formik.values.lastName && formik.touched.lastName && formik.errors.lastName}</p>
              </div>
            </div>
          </div>
          <h2 className='checkout-header'> Shipping Information</h2>
          <div className='username-container'>
            <div className='username '>
              <label>First Name</label>
              <br />
              <input
                type='text'
                placeholder='David'
                name='firstName'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              <div className='errors'>
                <p>
                  {formik.values.firstName && formik.touched.firstName && formik.errors.firstName}
                </p>
              </div>
            </div>
            <div className='username'>
              <label>Last Name</label>
              <br />
              <input
                type='text'
                placeholder='Ukperi'
                name='lastName'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              <div className='errors'>
                <p>{formik.values.lastName && formik.touched.lastName && formik.errors.lastName}</p>
              </div>
            </div>
          </div>
          <div className='field'>
            <label>Country/Region</label>
            <br />
            <input
              type='text'
              placeholder='Nigeria'
              name='country'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>
            <div className='errors'>
              <p>{formik.values.email && formik.touched.email && formik.errors.email}</p>
            </div>
          </div>
          <div className='field'>
            <label>Address</label>
            <br />
            <textarea className='address' name='address' placeholder='ABC' rows={1}></textarea>
            <div className='errors'>
              <p>{formik.values.password && formik.touched.password && formik.errors.password}</p>
            </div>
          </div>
          <div className='username-container'>
            <div className='username '>
              <label>State</label>
              <br />
              <input
                type='text'
                placeholder='Lagos'
                name='firstName'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              <div className='errors'>
                <p>
                  {formik.values.firstName && formik.touched.firstName && formik.errors.firstName}
                </p>
              </div>
            </div>
            <div className='username'>
              <label>City</label>
              <br />
              <input
                type='text'
                placeholder='Lagos'
                name='lastName'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              <div className='errors'>
                <p>{formik.values.lastName && formik.touched.lastName && formik.errors.lastName}</p>
              </div>
            </div>
          </div>
          <p className='save-text'>Save this info for next time</p>
          <button
            type='submit'
            className='signup-submit'
            onClick={() => {
              handleCheckOutFinal();
            }}
          >
            Proceed to Payment
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default CheckOut;
