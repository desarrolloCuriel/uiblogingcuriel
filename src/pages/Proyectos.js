import React from "react";
import ProyectoList from "../component/ProyectosList";

class Proyectos extends React.Component {
  proyectoss = {
    data: [
      {
        id: 1,
        nombre: "proyecto1",
        descripcion: "descripcion",
        link: "",
        avatar: ""
      },
      {
        id: 2,
        nombre: "proyecto2",
        descripcion: "descripcion2",
        link: "",
        avatar: ""
      },
      {
        id: 3,
        nombre: "Proyecto3",
        descripcion: "descripcion3",
        link: "",
        avatar: ""
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div className="banner">
          <h2>Proyectos</h2>
        </div>
        <div className="container">
          <ProyectoList proyectos={this.proyectoss.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Proyectos;
