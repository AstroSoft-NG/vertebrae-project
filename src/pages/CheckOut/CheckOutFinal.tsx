import { useContext } from 'react';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import { AppContext } from '../../appContext/AppContext';
import Cart from '../../components/Cart';

const CheckOutFinal: React.FC = () => {
  const { isCartOpen } = useContext(AppContext);

  return (
    <div>
      <Menu pageTitle='Products' />
      {isCartOpen && <Cart />}
      <div className='process-indicator process-indicator-2'>2/2</div>
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
            <div className='username checkout-final-field'>
              <label>Cvv</label>
              <br />
              <input type='text' placeholder='David' name='firstName'></input>
              <div className='errors'>
                <p></p>
              </div>
            </div>
            <div className='username checkout-final-field'>
              <label>Expiry Date</label>
              <br />
              <input type='date' placeholder='Ukperi' name='expiryDate'></input>
              <div className='errors'>
                <p></p>
              </div>
            </div>
          </div>
          <button type='submit' className='signup-submit'>
            Purchase
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default CheckOutFinal;
