import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <p>Redes sociales</p>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/eleazar-curiel-monjaraz-994305170/">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/CurielEleazar">twitter</a>
                </li>
              </ul>
            </div>
            <div className="col-sm">
              <p>Repository</p>
              <ul>
                <li>
                  <a href="https://gitlab.com/eleazar-00">GitLab</a>
                </li>
                <li>
                  <a href="https://github.com/desarrolloCurie">GitHub</a>
                </li>
              </ul>
            </div>
            <div className="col-sm">
              <p>Contacto</p>
              <ul>
                <li>Email: eleazar-00@hotmail.com</li>
                <li>Cel: 8112370478</li>
              </ul>
            </div>
          </div>
          <div className="row footer-row2"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
