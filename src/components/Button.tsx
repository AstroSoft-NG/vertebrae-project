import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonProps } from '../services/models';
import { AppContext } from '../appContext/AppContext';
const AddToCartButton: React.FC<ButtonProps> = ({ text, product }) => {
  console.log(product);
  const { handleAddCount, handleAddToCart, cartItems } = useContext(AppContext);
  useEffect(() => {
    console.log(cartItems);
  }, []);
  return (
    <div className='add-btn'>
      <button
        type='button'
        onClick={() => {
          handleAddToCart(product);
          handleAddCount();
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default AddToCartButton;
