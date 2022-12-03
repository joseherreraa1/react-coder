import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import './ItemDetail.css';

export default function ItemDetail({ product }) {
  return (
   <div className='container' >
      <Card  style={{ width: '30rem', margin:"16px"}}>
      <Card.Title style={{margin:"1rem", fontSize:"2.5rem", backgroundColor:"#FD794F"}}>{product.name}</Card.Title>
      <Card.Text style={{fontWeight:"700", margin:"0", fontSize:"2.5rem"}} >
        ${product.price}
      </Card.Text>
        <Card.Img style={{width:"25rem",alignSelf:"center"}} variant="top" src={product.imgUrl} alt={product.name} />
        <Card.Body style={{fontWeight:"700"}} >          {product.description}
        </Card.Body>
        <ItemCount  product={product}/>
      </Card>
    </div>
  )
}