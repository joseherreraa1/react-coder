import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';
import Button from 'react-bootstrap/Button';

export default function Item({ producto }) {
  return (
    <div>
      <img className="card-product-img" src={producto.imgUrl} alt={producto.nombre} />
      <div>
        <h2 className="product-card-title"> {producto.nombre} </h2>
        <p className="product-card-description"> {producto.descripcion} </p>
        <div className="card-product-group">
          <Link to={`/item/${producto.id}`}>
            <Button variant="primary" size="sm">
              Ver Mas
            </Button>
          </Link>
          <p> ${producto.price} </p>
        </div>
      </div>
    </div>
  );
}
