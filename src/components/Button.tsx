import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonProps } from '../services/models';
import { AppContext } from '../appContext/AppContext';
const AddToCartButton: React.FC<ButtonProps> = ({ text }) => {
  const { handleAddCount } = useContext(AppContext);
  const navigate = useNavigate();
  const handleCheckOut = () => {
    navigate('/checkout');
  };
  return (
    <div className='add-btn'>
      <button
        type='button'
        onClick={() => {
          handleAddCount();
          handleCheckOut();
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default AddToCartButton;
