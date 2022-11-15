import { useNavigate } from 'react-router-dom';

import Footer from '../../components/Footer';
import productsLogo from '../../assets/images/logo.png';
import personIcon from '../../assets/images/person-icon.png';
import cartIcon from '../../assets/images/cart-icon.png';
import cartItem from '../../assets/images/cart-item.png';
import { ProductType } from '../../services/models';
const products: ProductType[] = [
  { id: 1, image: cartItem, name: 'plain Tree', price: 25 },
  {
    id: 2,
    image: cartItem,
    name: 'plain Tree',
    price: 25,
  },
  { id: 3, image: cartItem, name: 'plain Tree', price: 25 },
  { id: 4, image: cartItem, name: 'plain Tree', price: 25 },
  { id: 5, image: cartItem, name: 'plain Tree', price: 25 },
  { id: 6, image: cartItem, name: 'plain Tree', price: 25 },
  { id: 7, image: cartItem, name: 'plain Tree', price: 25 },
  { id: 8, image: cartItem, name: 'plain Tree', price: 25 },
  { id: 9, image: cartItem, name: 'plain Tree', price: 25 },
];
const Products = () => {
  const navigate = useNavigate();
  const handleProductDetails = (name: string, product: ProductType) => {
    navigate(`/products/${name}`, { state: { product } });
  };
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
        {products.map(({ id, image, name, price }) => (
          <article
            className='item-card'
            key={id}
            onClick={() => handleProductDetails(name, { id, image, name, price })}
          >
            <img src={image} alt={`${name} image`} />
            <div className='item-details'>
              <h4>{name}</h4>
              <h3>$ {price}</h3>
            </div>
          </article>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Products;
