
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer';
import "./App.css";

export default function App () {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/category/:idcategory' element={<ItemListContainer/>} />
        <Route path='/item/:iditem' element={<ItemDetailContainer/>} />
        <Route />
      </Routes>
      <Footer/> 
    </BrowserRouter>
  );
};
