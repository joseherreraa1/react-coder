import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../CartContextComponent';

export default function Cart() {
  const { cart, totalCount, totalToPay, deleteFromCart } = useContext(cartContext);

  if(cart.lenght == 0){
    return(<>No hay nada en el carro</>)
  }

  return (
    <>
      {cart.map((item) => (
          <div key={item.id}>
            {item.name + '  ' + item.count + "unidad"}{" "}
            <span onClick={() => deleteFromCart(item.id)}>🗑️</span>
          </div>
      ))}
      <div>
        tienes en el carro: {totalCount} a pagar: {totalToPay}
      </div>
      <Link to="/checkout">Terminar Compra</Link>
    </>
  );
}
