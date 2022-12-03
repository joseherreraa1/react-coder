
import React from 'react';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../CartContextComponent';
import { Button} from 'react-bootstrap';

export default function ItemCount({ product }) {
    const [count, setCount] = useState(1);
    const [removeButton, setremoveButton] = useState(false);
    const {cart, addToCart} = useContext(cartContext);

    function sum(){
        if(count < product.stock){
        setCount(count + 1);
        }
    }
    function res (){
        if (count >= 2){
        setCount(count - 1);
        }
    }
    function onAdd() {
        addToCart(product, count);
        setremoveButton(true);
    }

    useEffect(() => {
     console.log(cart);
    }, [cart]);
    
  return (
    <div style={{fontWeight:"700", margin:"1rem"}}>
        <span style={{cursor: "pointer", margin: "1rem"}} onClick={sum}>
         <Button className='button' size= "sm">+</Button>
        </span>
        {count}
        <span style={{cursor: "pointer", margin: "1rem"}} onClick={res}>
        <Button className='button' size= "sm">-</Button>
        </span>

        {removeButton?(
            <>
         Producto agregado
         <br/>
         <br/>
         <Link to="/" style={{margin: "10px"}}>
         <Button className='button' size= "sm">Seguir Comprando</Button>
         </Link>
         <Link to="/cart" style={{margin: "10px"}}>
         <Button className='button' size= "sm">Ir Al Carrito</Button>
         </Link>
         </>
         ): (
         <Button className='button'  size= "sm" onClick={onAdd}>Agregar al Carro</Button>
         )}
    </div>
  )
}