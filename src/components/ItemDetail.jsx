import React from 'react';
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
}