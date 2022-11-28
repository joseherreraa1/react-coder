import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { cartContext } from '../CartContextComponent';
import {  addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { totalToPay, cart, deleteAllFromCart } = useContext(cartContext);
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState('');
  function validateForm() {
    const order = {
      buyer: { name, tel, email },
      totalToPay,
      cart,
    };
    //CONTROLAR CON UN IF

    const db = getFirestore();
    const orders = collection(db, 'orders');
    addDoc(orders, order).then(({ id }) => {
      setOrderId(id);
      deleteAllFromCart();
    });
  }

if(cart.length == 0){
  return(<>Nohay nada para pagar</>)
}

  return (
    <>
      {orderId ? (
      'Gracias por confiar tu id de compra es: ' + orderId 
     ) : (
      <div>
        <h1>Terminar Compra, ingrese datos</h1>
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
        <input type="tel" placeholder="tel" onChange={(e) => setTel(e.target.value)} />
        <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <Link to="/" > <button  onClick={validateForm}>Terminar compra</button> </Link>
      </div>
      )}
    </>
  );
}
