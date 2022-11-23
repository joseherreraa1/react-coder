import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
const { iditem } = useParams();
const [Catalogue, setCatalogue] = useState([]);



useEffect(() => {
    const fetching = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    });
    });
    fetching.then((res) => {
    (iditem || isNaN(iditem)) && setCatalogue(res.find((el) => el.id == iditem));
    });
    fetching.catch((err) => console.log(err));
}, [iditem]);

return Catalogue.length === 0 ? (
    <div className="loading-wrapper">
    <div className="loading-circle"></div>
    </div>
) : (
    <>
    <ItemDetail />
    </>
);
}
