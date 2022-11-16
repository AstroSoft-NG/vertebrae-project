import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Cart from '../../components/Cart';
import { AppContext } from '../../appContext/AppContext';
const SignUP = () => {
  const { isCartOpen } = useContext(AppContext);
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
    <>
      <Menu pageTitle='Products' />
      {isCartOpen && <Cart />}
      <section className='signup-page-form'>
        <h2>Sign UP</h2>
        <form onSubmit={formik.handleSubmit} className='signup-form'>
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
