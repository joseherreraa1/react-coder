import React from 'react'

export default function footer() {
  return (
    <footer>
      <div style={{backgroundColor:'#343a40'}} className="card text-center">
        <div className="card-header text-light">Electro.Shop</div>
        <div className="card-body">
          <h5 className="card-title fw-bolder text-light">
            Hecho por: Jose Herrera
          </h5>
        </div>
        <div className="card-footer text-light">
          &copy; Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};
  
