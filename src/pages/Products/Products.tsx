import { useNavigate } from 'react-router-dom';

import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
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
      <Menu />
      <section className='products-container'>
        {products.map(({ id, image, name, price }) => (
          <article
            className='item-card'
            key={id}
            onClick={() => handleProductDetails(name, { id, image, name, price })}
          >
            <img src={image} alt='' />
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
