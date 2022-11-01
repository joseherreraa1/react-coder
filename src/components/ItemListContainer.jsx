import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ prop }) => {
  //! Rescato la prop!
  const onAdd = (quantity) => {
    console.log(`agregaste ${quantity} unidades`);
  };

  return (
    <>
      <ItemCount initial={0} stock={5} onAdd={onAdd} />
      <h2>{prop}</h2>
      {/* Usamos la prop  */}
    </>
  );
};
export default ItemListContainer;
