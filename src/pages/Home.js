import React from "react";
import { Link } from "react-router-dom";
import imagenperfil from "../img/fotoperfil.jpeg";
import iconoHome2 from "../img/astronauts.svg";
import "../styles/home.css";
import Perfil from "../component/Perfil";
import Contacto from "../component/Contacto";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container homeheader">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="row">
                  <div className="col-sm-6">
                    <img
                      src={imagenperfil}
                      alt="Logo manager"
                      className="rounded-circle"
                      width="100%"
                    />
                  </div>
                  <div className="col-sm-6">
                    <div className="card-header">
                      Ing. sistemas computacionales
                    </div>
                    <div className="card">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Full Stack Developer Con más de 4 años de experiencia
                          desarrollando software a la media.
                        </li>
                        <li className="list-group-item">
                          Analista y consultor de software en proyectos de
                          producción, retail y tableros de control (BI).
                        </li>
                        <li className="list-group-item">
                          Freelance Diseñador wordpress
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Contacto />
            </div>
            <div className="col-sm-6">
              <Perfil />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
