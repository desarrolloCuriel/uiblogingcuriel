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
          <div className="col"></div>
          <div className="col">
            <a href="https://www.linkedin.com/in/eleazar-curiel-monjaraz-994305170/">
              <img src={logolinkedin} className="iconocontacto"  alt='Linkedin'/>
            </a>
          </div>
          <div className="col">
            <a href="https://twitter.com/CurielEleazar">
              <img src={logotwiter} className="iconocontacto" alt='Twiter'/>
            </a>
          </div>
          <div className="col">
            <a href="https://gitlab.com/eleazar-00">
              <img src={logogitlab} className="iconocontacto" alt='Repositorio Gitlab'/>
            </a>
          </div>
          <div className="col">
            <a href="https://github.com/desarrolloCuriel">
              <img src={logogithub} className="iconocontacto" alt='Repositorio GitHub' />
            </a>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
