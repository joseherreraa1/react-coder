import React, { useState, useEffect } from "react";
import "./itemCount.css";

export default function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));

  const decrementar = () => {
    setCount(count - 1);
  };
  const incrementar = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="contador">
      <button disabled={count <= 0} onClick={decrementar}>
        -
      </button>
      <span>{count}</span>
      <button disabled={count >= stock} onClick={incrementar}>
        +
      </button>
      <div>
        <button
          disabled={stock <= 0 || count <= 0}
          onClick={() => {
            onAdd(count);
            setCount(initial);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
