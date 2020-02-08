import React from "react";
import "../styles/proyecto.css";
class ProyectoList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.proyectos.map(proyecto => {
          return (
            <li className="card proyectolist">
              <div className="card-body">
                <h5 className="card-title">{proyecto.nombre}</h5>
                <p class="card-text">{proyecto.descripcion}</p>
                <a href={proyecto.link} className="btn btn-primary">
                  Ir
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ProyectoList;
