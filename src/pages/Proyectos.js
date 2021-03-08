import React from "react";
import ProyectoList from "../component/proyecto/ProyectosList";
import proyectoData from "../util/data/proyectos";
import imageningcuriel from "../img/ingcuriel.jpg";

class Proyectos extends React.Component {
  render() {
    let proyectosData = proyectoData;
    return (
      <React.Fragment>
        <div className="banner">
          <div className="row">
            <div className="col-xl-4 col-sm-4 col-4" style={{backgroundColor:"white"}}>
            <img src={imageningcuriel} alt="Logo"  className="logo-proyecto"/>
            </div>
            <div className="col-xl-8 col-sm-8 col-8" style= {{paddingTop:"1%"}}>
                <h4><u>Portafolio</u></h4>
             </div>
          </div>
        </div>
        <div className="container">
          <ProyectoList proyectos={proyectosData.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Proyectos;
