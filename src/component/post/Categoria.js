import React from "react";

function Categoria(props) {
  return (
    <div>
      <ul className="card">
        {props.categorias.map(categoria => {
          return <li key={categoria.id}>{categoria.nombre}</li>;
        })}
      </ul>
    </div>
  );
}

export default Categoria;
