import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Item({ product }) {
  return (
      <Card className='cards' style={{ width: '18rem' }}>
      <Card.Img  variant="top" src={product.imgUrl} alt={product.name} />
      <Card.Body className='medio'>
        <Card.Title className='title'>{product.name}</Card.Title>
        <Card.Text>
        ${product.price}
        </Card.Text>
        <Link to={`/item/${product.id}`}>
        <Button className='button' size= "sm">Ver Mas</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
