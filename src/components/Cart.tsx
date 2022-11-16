import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import cartProduct from '../assets/images/cart-item.png';
import { AppContext } from '../appContext/AppContext';

const Cart = () => {
  const { isCartOpen } = useContext(AppContext);
  const navigate = useNavigate();
  const handleCheckoutPage = () => navigate('/checkout');
  return (
    <div className={`cart-container ${isCartOpen ? 'cart-open' : ''}`}>
      <h2 className='cart-header'>Cart</h2>
      <article className='cart-product'>
        <div>
          <img src={cartProduct} alt='' />
        </div>
        <div>
          <h3 className='cart-product-name'>Plain Tea</h3>
          <div className='cart-buttons'>
            <button type='button' className='cart-btn'>
              -
            </button>
            <p>1</p>
            <button type='button' className='cart-btn'>
              +
            </button>
          </div>
        </div>
        <div className='cart-product-price'>
          <h3>$ 25</h3>
        </div>
      </article>
      <article className='cart-product'>
        <div>
          <img src={cartProduct} alt='' />
        </div>
        <div>
          <h3 className='cart-product-name'>Plain Tea</h3>
          <div className='cart-buttons'>
            <button type='button' className='cart-btn'>
              -
            </button>
            <p>1</p>
            <button type='button' className='cart-btn'>
              +
            </button>
          </div>
        </div>
        <div className='cart-product-name'>
          <h3>$ 25</h3>
        </div>
      </article>
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
