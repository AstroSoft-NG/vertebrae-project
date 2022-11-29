import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../appContext/AppContext';

const Cart: React.FC = () => {
  const { isCartOpen, cartItems } = useContext(AppContext);

  const [itemCount, setItemCount] = useState<number>(0);
  const navigate = useNavigate();
  const handleCheckoutPage = () => navigate('/checkout');

  const handleIncreaseItemCount = () => {
    if (itemCount === 99) return;

    setItemCount(itemCount + 1);
  };
  const handleDecreaseItemCount = () => {
    if (itemCount !== 0 && itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };
  return (
    <div className={`cart-container ${isCartOpen ? 'cart-open' : ''}`}>
      <h2 className='cart-header'>Cart</h2>
      {cartItems.map((cartItem) => (
        <article key={cartItem.id} className='cart-product'>
          <div>
            <img src={cartItem.image} alt='' />
          </div>
          <div>
            <h3 className='cart-product-name'>{cartItem.name}</h3>
            <div className='cart-buttons'>
              <button type='button' className='cart-btn' onClick={handleDecreaseItemCount}>
                -
              </button>
              <p>{itemCount}</p>
              <button type='button' className='cart-btn' onClick={handleIncreaseItemCount}>
                +
              </button>
            </div>
          </div>
          <div className='cart-product-price'>
            <h3>$ {cartItem.price}</h3>
          </div>
        </article>
      ))}

      <section className='amount-container'>
        <article className='total'>
          <h3>Total</h3>
          <h3>Subtotal</h3>
        </article>
        <article className='total'>
          <h3>$200</h3>
          <h3>$300</h3>
        </article>
      </section>
      <p>Shipping fees and other charges have been added </p>
      <button
        type='button'
        className='signup-submit cart-checkout-btn'
        onClick={handleCheckoutPage}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
