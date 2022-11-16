import { Link } from 'react-router-dom';
import { useContext } from 'react';

import productsLogo from '../assets/images/image 1.png';
import personIcon from '../assets/images/person-icon.png';
import cartIcon from '../assets/images/cart-icon.png';
import { MenuProps } from '../services/models';
import { AppContext } from '../appContext/AppContext';
const Menu: React.FC<MenuProps> = ({ pageTitle }) => {
  const { count, handleOpenCart } = useContext(AppContext);
  return (
    <main className='products-menu'>
      <article className='products-logo-box'>
        <img src={productsLogo} alt='products Logo' />
      </article>
      <article className='page-title'>
        <Link to='/products' className='products-link'>
          {pageTitle}
        </Link>
      </article>
      <article className='products-info'>
        <Link to='/signup'>
          <img src={personIcon} alt='Person Icon' className='person-icon' />
        </Link>
        <div className='cart-details-container' onClick={handleOpenCart}>
          <div className='cart-number'>
            <h3>{count}</h3>
          </div>
          <img src={cartIcon} alt='cart Icon' className='cart-icon' />
        </div>
      </article>
    </main>
  );
};

export default Menu;
