import React from 'react';

import cartProduct from '../assets/images/cart-item.png';

const Cart = () => {
  return (
    <div>
      <h2>Cart</h2>
      <article className='cart-product'>
        <div>
          <img src={cartProduct} alt='' />
        </div>
        <div>
          <h3>Plain Tea</h3>
          <div className='cart-buttons'>
            <button type='button'>+</button>
            <p>1</p>
            <button type='button'>-</button>
          </div>
        </div>
        <div>
          <h3>$ 25</h3>
        </div>
      </article>
      <article className='cart-product'>
        <div>
          <img src={cartProduct} alt='' />
        </div>
        <div>
          <h3>Plain Tea</h3>
          <div className='cart-buttons'>
            <button type='button'>+</button>
            <p>1</p>
            <button type='button'>-</button>
          </div>
        </div>
        <div>
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
      <button type='button' className='signup-submit'>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
