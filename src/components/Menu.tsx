import { Link } from 'react-router-dom';

import productsLogo from '../assets/images/image 1.png';
import personIcon from '../assets/images/person-icon.png';
import cartIcon from '../assets/images/cart-icon.png';
import { MenuProps } from '../services/models';
const Menu: React.FC<MenuProps> = ({ pageTitle }) => {
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
        <div className='cart-details-container'>
          <div className='cart-number'>
            <h3>0</h3>
          </div>
          <img src={cartIcon} alt='cart Icon' className='cart-icon' />
        </div>
      </article>
    </main>
  );
};

export default Menu;
