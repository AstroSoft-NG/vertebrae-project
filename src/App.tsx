import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products/Products';
import './App.css';
import ProductDetails from './pages/Products/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:name' element={<ProductDetails />}></Route>
    </Routes>
  );
}

export default App;
