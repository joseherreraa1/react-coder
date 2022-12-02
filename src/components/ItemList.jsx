import React from "react";
import Item from "./Item";
import './ItemListContainer.css'

export default function ItemList({ products }) {
  return(
  <div className="item-list-container">
    {products.map((product) =>(
      <Item key={product.id} product={product} />
  ))}
  </div>
  );
}



