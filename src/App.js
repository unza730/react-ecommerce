
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbarr from './components/Navbar';
import Products from './components/Products';

import Product from "./components/Product";


function App() {
  return (
    <>
      <Navbarr />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
      </Routes>
    </>
  );
}

export default App;
