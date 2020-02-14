import React from "react";
import ProyectoList from "../component/ProyectosList";

class Proyectos extends React.Component {
  proyectoss = {
    data: [
      {
        id: 1,
        nombre: "Punto de venta (PosCuriel)",
        descripcion:
          "Software especializado para pequeñas y medianas empresas (PyMEs) en proceso de crecimiento que tienes la visión de competir y mejorar sus servicios, incorporando tecnologías y herramientas que les facilite un mejor control.",
        link: "http://intecbic.com/",
        avatar:
          "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
      },
      {
        id: 2,
        nombre: "Mercadito Yuta (Plataforma de ecommerce)",
        descripcion:
          "Plataforma ecommerce, para la ventas de producto por internet",
        link: "https://mercadito-fff0d.firebaseapp.com/",
        avatar:
          "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
      },
      {
        id: 3,
        nombre: "Portal Municipal",
        descripcion:
          "Platafoma para las presentacion de documentacion de los proyecto municipales.",
        link: "https://sanpedrosochiapam-ca1b6.firebaseapp.com",
        avatar:
          "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div className="banner">
          <h2>Proyectos</h2>
        </div>
        <div className="container">
          <ProyectoList proyectos={this.proyectoss.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Proyectos;
