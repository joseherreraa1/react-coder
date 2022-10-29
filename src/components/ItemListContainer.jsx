import React from "react"
import ItemCount from "./ItemCount"

const ItemListContainer = () => {
const onAdd = (quantity)=>{
    console.log(`agregaste ${quantity} unidades`);
}

    return(
        <ItemCount initial={0} stock={5} onAdd={onAdd}/>
    )
}
export default ItemListContainer