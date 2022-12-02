import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import './ItemDetail.css';

export default function ItemDetail({ product }) {
  return (
   <div className='container' >
      <Card  style={{ width: '30rem', margin:"16px"}}>
      <Card.Title className='title' style={{margin:"1rem"}}>{product.name}</Card.Title>
      <Card.Text className='title'>
        ${product.price}
      </Card.Text>
        <Card.Img style={{width:"25rem",}} variant="top" src={product.imgUrl} alt={product.name} />
        <Card.Body>
          {product.description}
        </Card.Body>
        <ItemCount product={product}/>
      </Card>
    </div>
  )
}/* 

 */





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