import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { AppContext } from '../../appContext/AppContext';
import Menu from '../../components/Menu';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';

const ProductDetails: React.FC = () => {
  const location = useLocation();
  const { isCartOpen } = useContext(AppContext);

  const { image, name, price } = location.state.product;
  return (
    <div>
      <Menu pageTitle='Products' />
      {isCartOpen && <Cart />}
      <section className='item-details-container'>
        <article className='single-item-img'>
          <div className='item-card'>
            <img src={image} alt='' />
          </div>
          <div className='details-page-boxes'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </article>
        <article className='single-item-details'>
          <div className='single-item-header'>
            <h2>{name}</h2>
            <h2>${price}</h2>
          </div>
          <div className='single-product-info'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla mollitia rem quaerat
              magni debitis non eveniet ullam deserunt aliquid praesentium.
            </p>
          </div>
          <div className='product-size-container'>
            <h4>size:</h4>
            <select>
              <option value='L'>L</option>
              <option value='XL'>XL</option>
              <option value='L'>XXL</option>
            </select>
          </div>
          <Button text='Add to Cart' product={location.state?.product} />
        </article>
      </section>
      <div className='product-details-footer'>
        <Footer />
      </div>
    </div>
  );
};
export default ProductDetails;
