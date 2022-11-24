import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import { AppContext } from '../../appContext/AppContext';
import Cart from '../../components/Cart';

const CheckOut = () => {
  const { isCartOpen } = useContext(AppContext);
  const navigate = useNavigate();
  const handleCheckOutFinal = () => {
    navigate('/checkoutfinal');
  };

  return (
    <div>
      <Menu pageTitle='Products' />
      {isCartOpen && <Cart />}
      <section className='checkout-details'>
        <div className='process-indicator'>1/2</div>
        <h2 className='checkout-header'>Contact Info</h2>
        <form className='signup-form'>
          <div className='username-container'>
            <div className='username '>
              <label>Email</label>
              <br />
              <input type='email' placeholder='abc@gmail.com' name='firstName'></input>
              <div className='errors'>
                <p></p>
              </div>
            </div>
            <div className='username'>
              <label>Phone Number</label>
              <br />
              <input type='tel' placeholder='+2349022946610' name='lastName'></input>
              <div className='errors'>
                <p></p>
              </div>
            </div>
          </div>
          <h2 className='checkout-header'> Shipping Information</h2>
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
            <label>Country/Region</label>
            <br />
            <input type='text' placeholder='Nigeria' name='country'></input>
            <div className='errors'>
              <p></p>
            </div>
          </div>
          <div className='field'>
            <label>Address</label>
            <br />
            <textarea className='address' name='address' placeholder='ABC' rows={1}></textarea>
            <div className='errors'>
              <p></p>
            </div>
          </div>
          <div className='username-container'>
            <div className='username '>
              <label>State</label>
              <br />
              <input type='text' placeholder='Lagos' name='firstName'></input>
              <div className='errors'>
                <p></p>
              </div>
            </div>
            <div className='username'>
              <label>City</label>
              <br />
              <input type='text' placeholder='Lagos' name='lastName'></input>
              <div className='errors'>
                <p></p>
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
