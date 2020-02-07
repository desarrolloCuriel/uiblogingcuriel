import React from "react";
import { Link } from "react-router-dom";
import imagenperfil from "../img/fotoperfil.jpeg";
import iconoHome2 from "../img/astronauts.svg";
import "../styles/home.css";
import Perfil from "../component/Perfil";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container homeheader">
          <div className="row">
            <div className="col-sm-6 col-foto-perfil">
              <img
                src={imagenperfil}
                alt="Logo manager"
                className="rounded-circle"
                width="50%"
              />
              <h2>Ing. sistemas computacionales</h2>
              <h3>Full stack developer</h3>
              <p>
                <Link className="btn btn-primary" to="/badges">
                  Start
                </Link>
              </p>
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
