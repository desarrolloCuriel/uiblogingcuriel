import React from "react";
import ProyectoList from "../component/proyecto/ProyectosList";
import proyectoData from "../util/data/proyectos";

class Proyectos extends React.Component {
  render() {
    let proyectosData = proyectoData;
    return (
      <React.Fragment>
        <div className="banner">
          <h2>Proyectos</h2>
        </div>
        <div className="container">
          <ProyectoList proyectos={proyectosData.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Proyectos;
