import React from "react";
import Item from "./Item";

export default function ItemList({ productosHC }) {
  return !productosHC.length ? (
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
  );
}

/* import React from "react";
import { productosHC } from "./data";
import Item from "./Item";

export default function ItemList ({}) {
  return (
    <div>
      {!productosHC.length && "Loading..."}
      {productosHC.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}
 */
