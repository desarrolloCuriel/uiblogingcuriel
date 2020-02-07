import React from "react";
import logolinkedin from "../img/iconos/linkedin-brands.svg";
import logogithub from "../img/iconos/github-square-brands.svg";
import logogitlab from "../img/iconos/gitlab-brands.svg";
import logotwiter from "../img/iconos/twitter-square-brands.svg";
function Contacto() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-2">
            <a href="https://www.linkedin.com/in/eleazar-curiel-monjaraz-994305170/">
              <img src={logolinkedin} width="50%" />
            </a>
          </div>
          <div className="col-sm-2">
            <a href="https://twitter.com/CurielEleazar">
              <img src={logotwiter} width="50%" />
            </a>
          </div>
          <div className="col-sm-2">
            <a href="https://gitlab.com/eleazar-00">
              <img src={logogitlab} width="50%" />
            </a>
          </div>
          <div className="col-sm-2">
            <a href="https://github.com/desarrolloCuriel">
              <img src={logogithub} width="50%" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
