import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../CartContextComponent';
import Button from 'react-bootstrap/Button';
import "./cart.css"

export default function Cart() {
  const { cart, totalCount, totalToPay, deleteFromCart } = useContext(cartContext);

  if(cart.lenght == 0){
    return(<div className="cart-product-name">No hay nada en el carro</div>)
  }

  return (
    <>
      {cart.map((item) => (
          <div key={item.id} className="cart-product-container">
            <img className='cart-product-img' src={item.imgUrl} alt={item.name}/>
            <div className="info-container">
              <h3 className="cart-product-name">{item.name}</h3>
            <div className="info-group">
              <p className="info-group__title">Cantidad:</p>
              <p className="info-group__value">{item.count} {" "}</p>
            </div>
            <div className="info-group">
                  <p className="info-group__title"> Precio: $</p>
                  <p className="info-group__value">
                    {item.price * item.count}{" "}
                  </p>
                </div>
                <Button className='delete-btn' onClick={() => deleteFromCart(item.id)}> 
                <span >🗑️</span>
                </Button>
          </div>
          </div>
      ))}
      <div>
        <p className="info-group__title">TOTAL: </p>
        <p  className="total-price__amount">${totalToPay}</p>
      </div>
      <Link to="/checkout"><Button className='button' size= "sm">Terminar Compra</Button></Link>
    </>
  )}