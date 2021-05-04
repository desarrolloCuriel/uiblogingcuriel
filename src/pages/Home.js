import React from "react";
import imagenperfil from "../img/perfilpagina.png";
import imageningcuriel from "../img/ingcuriel.jpg";
import slidebd from "../img/slide/bd.jpg";
import slidehtml from "../img/slide/htmljavacss.jpg"
import slidegit from "../img/slide/git.jpeg"
import "../styles/home.css";
import Perfil from "../component/Perfil";
import Contacto from "../component/Contacto";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment> 
        <div className="card"> 
          <div className="card-body">
            <div className="row" >
              <div className="col-xl-3 col-sm-6 col-12 text-center">
                   <img src={imagenperfil} alt="Logo manager" className="" width="90%" style={{borderRadius: "10PX"}}/>
               </div>
              <div className="col-xl-3 col-sm-6 col-12 text-center" >
                <h5 className="card-title">Eleazar Curiel Monjaraz</h5>
                <h6><strong>FullStack Developer</strong></h6>
                <h6 className="card-title">Ing. en sistemas computacionales</h6>
                <Contacto />
              </div>
              <div className="col-xl-6 col-sm-12 col-12">
                  <p className="card-text text-justify">
                    Ingeniero en sistemas con amplia experiencia en las fases del desarrollo de software a la
                    medida. He colaborado en el análisis e implementación de nuevas herramientas tecnológicas
                    que mejoren la productividad de empresas con la visión de crecimiento.
                </p>
               </div>
            </div>
          </div>

          <div className="card-footer text-muted text-center"  >
            <button type="button" className="btn btn-outline-primary" style={{margin:'.1%'}}>CSS</button>
            <button type="button" className="btn btn-outline-secondary" style={{margin:'.1%'}}>React</button>
            <button type="button" className="btn btn-outline-success" style={{margin:'.1%'}}>Java</button>
            <button type="button" className="btn btn-outline-danger" style={{margin:'.1%'}}>Angular</button>
            <button type="button" className="btn btn-outline-warning" style={{margin:'.1%'}}>JavaScript</button>
            <button type="button" className="btn btn-outline-info" style={{margin:'.1%'}}>Html</button>
            <button type="button" className="btn btn-outline-dark" style={{margin:'.1%'}}>Postgres</button>
            <button type="button" className="btn btn-outline-primary" style={{margin:'.1%'}}>SQL</button>
            <button type="button" className="btn btn-outline-secondary" style={{margin:'.1%'}}>Spring Boot</button>
            <button type="button" className="btn btn-outline-success" style={{margin:'.1%'}}>API REST</button>
            <button type="button" className="btn btn-outline-danger" style={{margin:'.1%'}}>TypeScript</button>
            <button type="button" className="btn btn-outline-warning" style={{margin:'.1%'}}>Git</button>
            <button type="button" className="btn btn-outline-info" style={{margin:'.1%'}}>Node</button>
            <button type="button" className="btn btn-outline-dark" style={{margin:'.1%'}}>AWS</button>
          </div>
        </div> 

        <div className="card container">
          <div className="row">
            <div className="col-xl-5 col-sm-12 col-12">
              <Perfil />
            </div>
            <div className="col-xl-7 col-sm-12 col-12">

             <h5 className="text-center">Habilidades</h5>   
             <div className="" style={{margin:"2%"}}>
              <div className="row">
                <div className="col-xl-3 col-sm-3 col-6">
                  <div className="habilidades-transform" style={{backgroundColor:"#17a2b8"}}>
                    <p><strong>Programación</strong></p>
                  </div>
                 </div>
                <div className="col-xl-3 col-sm-3 col-6">
                  <div className="habilidades-transform"  style={{backgroundColor:"#fd7e14"}}>
                     <p><strong>Bases de datos</strong></p>
                  </div>
                 </div>
                <div className="col-xl-3 col-sm-3 col-6">
                    <div className="habilidades-transform"  style={{backgroundColor:"#ffc107"}}>
                      <p><strong>Redes</strong></p>
                    </div>
                 </div>
                 <div className="col-xl-3 col-sm-3 col-6">
                    <div className="habilidades-transform"  style={{backgroundColor:"red"}}>
                      <p><strong>Consultor TI</strong></p>
                    </div>
                 </div>
              </div>
            </div>
             
             <div id="carouselExampleControls" className="carousel slide container" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={slidebd} alt="First slide" width="600px" height="400px"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={slidehtml} alt="Second slide" width="600px" height="400px"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={slidegit} alt="Third slide" width="600px" height="400px"/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
