import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation();
  const { id, image, name, price } = location.state.product;
  return (
    <div>
      <h1>Hello details {id}</h1>
    </div>
  );
};

export default ProductDetails;
