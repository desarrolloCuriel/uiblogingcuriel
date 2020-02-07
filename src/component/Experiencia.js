import React from "react";

function Experiencia(props) {
  return (
    <div>
      <ul className="list-unstyled">
        {props.experiencia.map(exp => {
          return (
            <li key={exp.id} className="card">
              <div className="card-header">
                <h5>{exp.puesto}</h5>
              </div>
              <div className="card-body">
                <p>Empresa :{exp.empresa}</p>
                <p>Ubicación :{exp.ubicacion}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Experiencia;
