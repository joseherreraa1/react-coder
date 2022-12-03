import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
//import './ItemListContainer.css'

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idcategory } = useParams();
  useEffect(() => {
    const db = getFirestore();
    let miCollection;
    
    //SI ESTOY EN HOME
    if (idcategory === undefined) {
      miCollection = collection(db, 'products');

    } else {
      miCollection = query(
        collection(db, 'products'), 
        where('idCategory', '==', idcategory)
        );
    }
    getDocs(miCollection).then((data) => {
      const auxProducts = data.docs.map((product) => ({
        ...product.data(),
        id: product.id,
      }));

      setProducts(auxProducts);
    });
  }, [idcategory]);

 console.log(products)
  return (
    <div className="item-list-container">
      <ItemList  products={products} />
    </div>
);
}
