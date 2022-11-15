import productsLogo from '../assets/images/logo.png';
import personIcon from '../assets/images/person-icon.png';
import cartIcon from '../assets/images/cart-icon.png';
const Menu = () => {
  return (
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
  );
};

export default Menu;
