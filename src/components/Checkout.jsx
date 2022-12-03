import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../CartContextComponent';
import './checkout.css'

export default function Checkout() {
  const { totalToPay, cart, deleteAllFromCart } = useContext(cartContext);
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, SetConfirmEmail] = useState('');
  const [orderId, setOrderId] = useState('');
  const [payConfirmed, setPayConfirmed] = useState(false);
  function validateForm() {
    const order = {
      buyer: { name, tel, email, confirmEmail },
      totalToPay,
      cart,
    };


    const db = getFirestore();
    const orders = collection(db, 'orders');
    addDoc(orders, order).then(({ id }) => setOrderId(id));
    setPayConfirmed(true);
      deleteAllFromCart();

  }

if(cart.length == 0){
  return(<>No hay nada para pagar</>)
}

  return (
    <>
    {payConfirmed ? (
              <p>
              Gracias por confiar tu id de compra es: {" "}
            <span className="id-order-number">{orderId}</span>
          </p>
     ) : (
      <div className='checkout-form'>
        <h1 className='main-title__container'>Terminar Compra, ingrese datos</h1>
        <div className='checkout-main  '>Nombre : <input type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)} /> </div>
          <div className='checkout-main '>Email :<input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />  </div>
          <div className='checkout-main '>Confirmar Email :<input type="email" placeholder="Confirme Email" onChange={(e) => SetConfirmEmail(e.target.value)} />  </div>
          <div className='checkout-main '>Telefono :<input type="phone" placeholder="Telefono" onChange={(e) => setTel(e.target.value)} />  </div>
      <Link to="/"><button className='button' size= "lg" onClick={validateForm}>Terminar compra</button></Link> 
      </div>
      )}
    </>
  )
}
