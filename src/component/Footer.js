import React from "react";
import "../styles/Footer.css";
import imageningcuriel from "../img/ingcuriel.jpg";

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className="row" style={{margin:'0'}}>
          <div className="col-xl-4 col-sm-6 col-6"  >
            <p><strong>Contenido</strong></p>
            <hr className="line"></hr>
            <ul className="list-unstyled">
              <li>
                <a href="/">
                 <strong>Perfil</strong>
                </a>
              </li>
              <li>
                <a href="/proyectos"><strong>Portafolio</strong></a>
              </li>
            </ul>
          </div>
          <div className="col-xl-4 col-sm-6 col-6"  >
            <p><strong>Repositorios</strong></p>
            <hr className="line"></hr>
            <ul className="list-unstyled">
              <li>
                <a href="https://gitlab.com/eleazar-00"><strong>GitLab</strong></a>
              </li>
              <li>
                <a href="https://github.com/desarrolloCurie"><strong>GitHub</strong></a>
              </li>
            </ul>
          </div>
          <div className="col-xl-4 col-sm-6 col-6"  >
            <p><strong>Contacto</strong></p>
            <hr className="line"></hr>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.linkedin.com/in/eleazar-curiel-monjaraz-994305170/"><strong>Linkedin</strong></a>
              </li>
              <li>
                <a href="#"><strong>eleazar.isc@gmail.com</strong></a>
              </li>
            </ul>
          </div> 
        </div>

        <div className="row " width="100%">
          <div className="col text-center">
            <img src={imageningcuriel} alt="Logo"  width="40%"/>
             <p className="">© Eleazar Curiel Monjarz  2021</p>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
