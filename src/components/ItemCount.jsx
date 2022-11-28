
import React from 'react';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../CartContextComponent';

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
    <div>
        <span style={{cursor: "pointer"}} onClick={sum}>
        +
        </span>
        {count}
        <span style={{cursor: "pointer"}} onClick={res}>
        -
        </span>
        <br/>
        {removeButton?(
            <>
         producto agregado
         <Link to="/" >Seguir Comprando</Link>
         <Link to="/checkout">Terminar Compra</Link>
         </>
         ): (
         <button onClick={onAdd}>Agregar al Carro</button>
         )}
    </div>
  )
}





/* import React, {useState, useEffect} from "react";
import "./ItemCount.css";

export default function ItemCount ({productoHc}) {
    const [cart, setCart] = useState([]);
    const [counter, setCounter] = useState(1);

    const onAdd = () => {
        (counter < productoHc.stock && counter.stock !== 0 ) ? setCounter(counter+1) : alert("No puede agregar más, stock agotado");
    }
    const onSubstract = () => {
        (counter > 1 ) ? setCounter(counter-1) : alert("No se puede quitar mas");
    }
    const addToCart = (productoHc) => {
        setCart(cart.push(productoHc));
        console.log(cart);
    }
    const updateProductAmount = (productoHc) => {
        productoHc.amount = counter;
    }

    useEffect(() => {
        updateProductAmount(productoHc);
    }, [counter]);


    return(
        <div className="counter-wrapper">
            <section className="left-side">
                <div className="item-counter">
                    <button className="substract-btn" onClick={()=> onSubstract()}> - </button>
                    <p className="amount-number"> {counter} </p>
                    <button className="add-btn" onClick={()=> onAdd()}> + </button>
                </div>
            </section>
            <section className="right-side">
                <button className="add-to-cart-btn" onClick={()=>{ addToCart(productoHc)}}>Agregar al Carrito</button>
            </section>
        </div>
    )
};
 */