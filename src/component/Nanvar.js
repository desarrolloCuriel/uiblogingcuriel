import React from "react";
import { Link } from "react-router-dom";
import logoCuriel from '../img/logoingcurielblanco.png'

import "../styles/Nanvar.css";

class Nanvar extends React.Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light">
          <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
           <a className="navbar-brand" href="/" style={{color:"white"}}>
              <img src={logoCuriel} alt="Logo" width="30" height="30" className="logo d-inline-block align-top"/>
              Ingeniero CURIEL
            </a>
           <div className="collapse navbar-collapse" id="navbarTogglerDemo01"> 
            <ul className="navbar-nav mr-auto ">
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <Link className="nav-link" to="/">
                      <strong>Perfil</strong>
                  </Link> 
                </li>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <Link className="nav-link" to="/Proyectos">
                      <strong>Portafolio</strong>
                  </Link> 
                </li>
             </ul>
            <div className="d-flex flex-row justify-content-center" >
                 <a href="https://www.linkedin.com/in/eleazar-curiel-monjaraz-994305170" className="btn btn-outline-primary mr-1">Linkedin</a>
                 <a href="https://www.youtube.com/channel/UCectXrkRBSf2rECS_Te_vIg" className="btn btn-outline-danger mr-1">YouTube</a>
             </div>
           </div>
      </nav>
    );
  }
}

export default Nanvar;
