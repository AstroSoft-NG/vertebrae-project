import { Routes, Route } from 'react-router-dom';

import SignUP from './pages/SignUp/SignUP';
import LogIn from './pages/LogIn/LogIn';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import './App.css';
import ProductDetails from './pages/Products/ProductDetails';
import AccountRecovery from './pages/AccountRecovery/AccountRecovery';
import RecoveryComfirmation from './pages/AccountRecovery/RecoveryComfirmation';
import FinalRecoveryPage from './pages/AccountRecovery/FinalRecoveryPage';
import Info from './pages/Info/Info';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:name' element={<ProductDetails />}></Route>
      <Route path='/signup' element={<SignUP />}></Route>
      <Route path='/login' element={<LogIn />}></Route>
      <Route path='/accountrecovery' element={<AccountRecovery />}></Route>
      <Route path='/recoveryconfirmation' element={<RecoveryComfirmation />}></Route>
      <Route path='/finalrecovery' element={<FinalRecoveryPage />}></Route>
      <Route path='/info' element={<Info />}></Route>
    </Routes>
  );
}

export default App;
