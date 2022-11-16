import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonProps } from '../services/models';
const AddToCartButton: React.FC<ButtonProps> = ({ text }) => {
  const navigate = useNavigate();
  const handleCheckOut = () => {
    navigate('/checkout');
  };
  return (
    <div className='add-btn'>
      <button type='button' onClick={handleCheckOut}>
        {text}
      </button>
    </div>
  );
};

export default AddToCartButton;
