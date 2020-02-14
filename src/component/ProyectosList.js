import React from "react";
import "../styles/proyecto.css";
class ProyectoList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.proyectos.map(proyecto => {
          return (
            <li key={proyecto.id} className="card proyectolist">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-2 text-center">
                    <img src={proyecto.avatar} />
                  </div>
                  <div className="col-sm-10">
                    <h5 className="card-title">{proyecto.nombre}</h5>
                    <p className="card-text text-justify">
                      {proyecto.descripcion}
                    </p>
                    <a href={proyecto.link} className="btn btn-primary">
                      Ir
                    </a>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ProyectoList;
