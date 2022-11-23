import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const miCollection = collection(db, 'productos');

    getDocs(miCollection).then((data) => {
      const auxProductos = data.docs.map((productos) => ({
        ...productos.data(),
        id: productos.id,
      }));
      setProductos(auxProductos);
    });
  }, []);

  /*  const { idcategory } = useParams();


    const [Catalogue, setCatalogue] = useState([]) 

    useEffect(() => {
        const fetching = new Promise((resolve, reject) => {
            setCatalogue([])
            setTimeout(() => {
                resolve(productosHC)
            }, );
        })
        fetching.then( res => {
            if (idcategory) {
                setCatalogue(res.filter((productosHC) => productosHC.category === idcategory))
            }
            else {
                setCatalogue(res)
            }
        })
        .catch((err) => console.log(err))
    }, [idcategory])
*/
  return (
    <div className="item-list-container">
      <ItemList productos={productos} />
    </div>
  );
}
