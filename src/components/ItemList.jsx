import React from "react";
import Item from "./Item";

export default function ItemList({ productos }) {
  return(
  <div>
    {productos.map((producto) =>(
      <Item key={producto.id} producto={producto} />
  ))}
  </div>
  );
}



/*    
 !productosHC.length ? (
<>
      <div className="loading-wrapper">
        <div className="loading-circle"></div>
      </div>
    </>
  ) : (
    productosHC.map((item) => {
      return (
        <article className="card-container" key={item.id}>
          <Item
            title={item.name}
            picture={item.image}
            description={item.title}
            price={item.price}
            id={item.id}
          />
        </article>
      );
    })
  ); */

