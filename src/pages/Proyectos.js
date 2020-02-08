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
        avatar: ""
      },
      {
        id: 2,
        nombre: "Mercadito Yuta (Plataforma de ecommerce)",
        descripcion: "descripcion2",
        link: "https://mercadito-fff0d.firebaseapp.com/",
        avatar: ""
      },
      {
        id: 3,
        nombre: "Portal Municipal",
        descripcion: "descripcion3",
        link: "https://sanpedrosochiapam-ca1b6.firebaseapp.com",
        avatar: ""
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
