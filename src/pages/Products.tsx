import productsLogo from '../assets/images/logo.png';
import personIcon from '../assets/images/person-icon.png';
import cartIcon from '../assets/images/cart-icon.png';
import cartItem from '../assets/images/cart-item.png';

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
              <h3>2</h3>
            </div>
            <img src={cartIcon} alt='cart Icon' className='cart-icon' />
          </div>
        </article>
      </main>
      <section className='products-container'>
        <article className='item-card'>
          <img src={cartItem} alt='Item Image'></img>
          <div className='item-details'>
            <h4>Plain Tree</h4>
            <h3>$25</h3>
          </div>
        </article>
        <article className='item-card'>
          <img src={cartItem} alt='Item Image'></img>
          <div className='item-details'>
            <h4>Plain Tree</h4>
            <h3>$25</h3>
          </div>
        </article>
        <article className='item-card'>
          <img src={cartItem} alt='Item Image'></img>
          <div className='item-details'>
            <h4>Plain Tree</h4>
            <h3>$25</h3>
          </div>
        </article>
        <article className='item-card'>
          <img src={cartItem} alt='Item Image'></img>
          <div className='item-details'>
            <h4>Plain Tree</h4>
            <h3>$25</h3>
          </div>
        </article>
        <article className='item-card'>
          <img src={cartItem} alt='Item Image'></img>
          <div className='item-details'>
            <h4>Plain Tree</h4>
            <h3>$25</h3>
          </div>
        </article>
        <article className='item-card'>
          <img src={cartItem} alt='Item Image'></img>
          <div className='item-details'>
            <h4>Plain Tree</h4>
            <h3>$25</h3>
          </div>
        </article>
        <article className='item-card'>
          <img src={cartItem} alt='Item Image'></img>
          <div className='item-details'>
            <h4>Plain Tree</h4>
            <h3>$25</h3>
          </div>
        </article>

        <article className='item-card'>
          <img src={cartItem} alt='Item Image'></img>
          <div className='item-details'>
            <h4>Plain Tree</h4>
            <h3>$25</h3>
          </div>
        </article>
        <article className='item-card'>
          <img src={cartItem} alt='Item Image'></img>
          <div className='item-details'>
            <h4>Plain Tree</h4>
            <h3>$25</h3>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Products;
