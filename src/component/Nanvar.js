import React from "react";
import { Link } from "react-router-dom";

import "../styles/Nanvar.css";

class Nanvar extends React.Component {
  render() {
    return (
      <div className="nanvar">
        <div className="container-fluid">
          <Link className="nanvarbrand nav-link" to="/">
            <span className="font-weight-light">Blog</span>
            <span className="font-weight-bold"> Ing CURIEL</span>
          </Link>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Perfil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/proyectos">
                Proyectos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nanvar;
