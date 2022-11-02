import React from "react";
import icono from "../IconoCarrito.svg"


const CartWidget = () => {
    return (
        <a href="#">
            <img src={icono} className="iconoCarrito"></img>
        </a>
    );
};
export default CartWidget;