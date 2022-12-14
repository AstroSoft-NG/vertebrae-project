import { Routes, Route } from 'react-router-dom';

import { AppContextProvider } from './appContext/AppContext';
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
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import CheckOut from './pages/CheckOut/CheckOut';
import CheckOutFinal from './pages/CheckOut/CheckOutFinal';

function App() {
  return (
    <AppContextProvider>
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
        <Route path='/privacypolicy' element={<PrivacyPolicy />}></Route>
        <Route path='/checkout' element={<CheckOut />}></Route>
        <Route path='/checkoutfinal' element={<CheckOutFinal />}></Route>
      </Routes>
    </AppContextProvider>
  );
}

export default App;
