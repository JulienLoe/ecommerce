import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import PageSingleProducts from './Pages/PageSingleProducts';
import PageCart from './Pages/PageCart';
import Cart from './Pages/Cart'
import PageLogin from './Pages/PageLogin';
import PageRegister from './Pages/PageRegister';
import PageDispatch from './Pages/PageDispatch';
import PageOrder from './Pages/PageOrder';
import PageOrderPay from './Pages/PageOrderPay';
import PageContact from './Pages/PageContact';
import history from './history';

function App() { 

  return (
    <div className="App">
      <BrowserRouter>
      <Routes history={history}>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<PageSingleProducts />} />
        <Route path='/cart/:id' element={<PageCart />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<PageLogin />} />
        <Route path='/register' element={<PageRegister />} />
        <Route path='/dispatch' element={<PageDispatch />} />
        <Route path='/order' element={<PageOrder />} />
        <Route path='/orderPay/:id' element={<PageOrderPay />} />
        <Route path='/contact' element={<PageContact />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
