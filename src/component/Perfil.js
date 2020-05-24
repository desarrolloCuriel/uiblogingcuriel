import React from "react";
import Experiencia from "./Experiencia";

function Perfil() {
  const experiencia = [
    {
      id: 1,
      puesto: "Full stack developer",
      logo: "logo",
      empresa: "Grupo famsa",
      ubicacion: "Monterrey,NL. Mexico",
      descripcion: "",
      fechaInicio: "01/02/2019",
      fechaFin: ""
    },
    {
      id: 2,
      puesto: "Analistas y Desarrollador java",
      logo: "logo",
      empresa: "World Software Services",
      ubicacion: "Monterrey,NL. Mexico",
      descripcion: "",
      fechaInicio: "01/02/2018",
      fechaFin: "01/29/2019"
    }, 
    {
      id: 3,
      puesto: "Desarrollador web",
      empresa: "Soft Design Factory México",
      logo: "logo",
      ubicacion: "Mexico",
      descripcion: "",
      fechaInicio: "01/08/2015",
      fechaFin: "01/29/2018"
    }
  ];
  return (
    <div>
      <div>
        <h1>Experiencia</h1>
        <Experiencia experiencia={experiencia} />
      </div>
    </div>
  );
}
export default Perfil;
