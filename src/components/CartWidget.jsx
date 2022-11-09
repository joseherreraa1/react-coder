import React from "react";
import icono from "../IconoCarrito.svg";
import "./CartWidget.css";

const CartWidget = () => {
return (
    <button className='bag-btn'>
            <img src={icono} className="iconoCarrito"></img>
    <div className='cart-counter'> - </div>
</button>
);
};
export default CartWidget;
