import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import './ItemDetail.css';

export default function ItemDetail({ product }) {
  return (
  <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.imgUrl} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        ${product.price}
        </Card.Text>
      </Card.Body>
      <ItemCount product={product}/>
    </Card>

    </div>
  )
}






/* import React from 'react';
import "./ItemDetail.css";

export default function ItemDetail({productosHC}) {
  return (

    <article className='product-wrapper'>
        <div className='section-img'>
            <button className='back-to-shop-btn' id={productosHC.id}>
              <div className='back-to-shop-btn-circle'>
              </div>
            </button>
          <img className='product-detail-img' src={productosHC.image} alt="product img" />
        </div>
        <div className='section-detail-info'>
          <h2 className='product-detail-title'> {productosHC.title} </h2>
          <p className='product-detail-price'> ${productosHC.price} </p>
          <div className='product-info-group'>
            <h3> Descripcion de Producto: </h3>
            <p className='product-detail-description'> {productosHC.description} </p>
          </div>
        </div>
    </article>
  )
} */