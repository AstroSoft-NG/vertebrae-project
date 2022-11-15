import React from 'react';
interface ButtonProps {
  text: string;
}

const AddToCartButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div className='add-btn'>
      <button type='button'>{text}</button>
    </div>
  );
};

export default AddToCartButton;
