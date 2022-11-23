
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Cart from './components/Cart';
import Checkuot from "./components/Checkout";
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';

export default function App () {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/category/:idcategory' element={<ItemListContainer/>} />
        <Route path='/item/:iditem' element={<ItemDetailContainer/>} />
        <Route path='/checkout' element={<Checkuot /> } />
        <Route path='/cart' element={<Cart/>} />
        <Route />
      </Routes>
      <Footer/> 
    </BrowserRouter>
  );
};
