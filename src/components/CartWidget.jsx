import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { cartContext } from "../CartContextComponent";
import "./CartWidget.css";

const CartWidget = () => {
 const { totalCount} = useContext(cartContext);

return (
    <Link to= "./cart">
    <button className='bag-btn '>
           🛒 {totalCount}
    <div className='cart-counter'> {totalCount} </div>
</button></Link>
);
};
export default CartWidget;
