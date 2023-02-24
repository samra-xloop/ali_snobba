import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Thanks from './pages/Thanks/Thanks';
import { Navbar } from './components/Navbar/Navbar';
import ShopContextProvider from './context/ShopContextProvider';

const App = () => {

  
  return (
    <div >
      <ShopContextProvider>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/details/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
