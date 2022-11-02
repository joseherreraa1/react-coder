import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const productos = [
    {id:1, image:"https://medias.musimundo.com/medias/00510018-145440-145440-01-145440-01.jpg-size300?context=bWFzdGVyfGltYWdlc3w0MDEzOXxpbWFnZS9qcGVnfGhhMy9oMGYvMTA0MjIwNzY4MDEwNTQvMDA1MTAwMTgtMTQ1NDQwLTE0NTQ0MF8wMS0xNDU0NDBfMDEuanBnX3NpemUzMDB8N2E0NTVjMjNlNWNlNTUzYzAwMTI3M2YxMDAyZjc5M2JkYmFkMDc0OTMyZmNmMjY4YjI0NDJjZWU2Mzk3NjliZQ", title:"Samsung S22",},
    {id:2, image:"https://medias.musimundo.com/medias/00556015-146379-146379-01-146379-01.jpg-size300?context=bWFzdGVyfGltYWdlc3wyMTc3MnxpbWFnZS9qcGVnfGhkMC9oNzUvMTAzODcwNDU3MTE5MDIvMDA1NTYwMTUtMTQ2Mzc5LTE0NjM3OV8wMS0xNDYzNzlfMDEuanBnX3NpemUzMDB8MjVjNDUwNDcyZDYxMWRhMmFlODM2ODQ0YWVhNDFhYmI2ZDBlZmJmMGUyNDZmZDgwMzNhOTI0ZjA3NDk0ZWM4Mg", title:"Iphone 13"},
    {id:3, image:"https://medias.musimundo.com/medias/00590026-146931-146931-01-146931-01.jpg-size300?context=bWFzdGVyfGltYWdlc3wzNDk2NHxpbWFnZS9qcGVnfGg5YS9oMTIvMTA0MTUzNTU3MjM4MDYvMDA1OTAwMjYtMTQ2OTMxLTE0NjkzMV8wMS0xNDY5MzFfMDEuanBnX3NpemUzMDB8N2EyM2Y3YWY3OWU4NzdjMjQzYmI1YmQxZjhkZDI1M2QyM2Q4OGYyOGE1ZjZkMTRlYThmMjI2ODRlZjNmMzA4Zg", title:"Samssung Zfold"},
];

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

useEffect(() => {
 const getData = new Promise(resolve => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
 });
 getData.then(res => setData(res) );
}, [])

    
const onAdd = (quantity)=>{
    console.log(`agregaste ${quantity} unidades`);
};

    return(
        <>
            <ItemCount initial={0} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
        </>
    )
};
export default ItemListContainer;