import React from 'react'
import { Link } from 'react-router-dom'
import "./item.css";
import Button from 'react-bootstrap/Button';

export default function Item({title, picture, description, price, id, }) {

  return (
    <div>
      <img className='card-product-img' src={picture} alt={title} />
      <div>
      <h2 className='product-card-title'> {title} </h2>
        <p className='product-card-description'> {description} </p>
        <div className='card-product-group'>
          <Link to={`/item/${id}`}><Button variant="primary" size="sm">
          Ver Mas
        </Button></Link>
          <p> ${price} </p>
        </div>
      </div> 
    </div>
  )
}
/* 
  const onAdd = (quantity) => {
    console.log(`agregaste ${quantity} unidades`);
};

return (
  <Card style={{ width: '15rem' }}>
    <Card.Img variant="top" src={item.image} />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
      <Link to={"/item/" + item.id}> Ver mas</Link>
      </Card.Text>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </Card.Body>
  </Card>
);
}
 */