import { Link } from 'react-router-dom';

import productsLogo from '../assets/images/logo.png';
import personIcon from '../assets/images/person-icon.png';
import cartIcon from '../assets/images/cart-icon.png';
import cartItem from '../assets/images/cart-item.png';
import { ProductType } from '../services/models';
const products: ProductType[] = [
  {
    image: cartItem,
    name: 'plain Tree',
    price: 25,
  },
  {
    image: cartItem,
    name: 'plain Tree',
    price: 25,
  },
  {
    image: cartItem,
    name: 'plain Tree',
    price: 25,
  },
  {
    image: cartItem,
    name: 'plain Tree',
    price: 25,
  },
  {
    image: cartItem,
    name: 'plain Tree',
    price: 25,
  },
  {
    image: cartItem,
    name: 'plain Tree',
    price: 25,
  },
  {
    image: cartItem,
    name: 'plain Tree',
    price: 25,
  },
  {
    image: cartItem,
    name: 'plain Tree',
    price: 25,
  },
  {
    image: cartItem,
    name: 'plain Tree',
    price: 25,
  },
];
const Products = () => {
  return (
    <div>
      <main className='products-menu'>
        <article className='products-logo-box'>
          <img src={productsLogo} alt='products Logo' />
        </article>
        <article className='page-title'>
          <h1>Products</h1>
        </article>
        <article className='products-info'>
          <div>
            <img src={personIcon} alt='Person Icon' className='person-icon' />
          </div>
          <div className='cart-details-container'>
            <div className='cart-number'>
              <h3>0</h3>
            </div>
            <img src={cartIcon} alt='cart Icon' className='cart-icon' />
          </div>
        </article>
      </main>
      <section className='products-container'>
        {products.map(({ image, name, price }, i) => (
          <article className='item-card' key={i}>
            <img src={image} alt={`${name} image`} />
            <div className='item-details'>
              <h4>{name}</h4>
              <h3>$ {price}</h3>
            </div>
          </article>
        ))}
      </section>
      <footer className='products-footer'>
        <Link to='' className='footer-link'>
          Privacy Policy
        </Link>
        <Link to='' className='footer-link'>
          Terms and Conditions
        </Link>
        <Link to='' className='footer-link'>
          Info
        </Link>
        <Link to='/' className='footer-link'>
          <img src={productsLogo} alt='Products Logo' />
        </Link>
      </footer>
    </div>
  );
};

export default Products;
