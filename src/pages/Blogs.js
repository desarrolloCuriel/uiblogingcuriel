import React from 'react';
import Categoria from "../component/post/Categoria";
import Postlist from "../component/post/Postlist";

function Blogs() {
  const categorias = [
    {
      id: 1,
      nombre: "Bases de datos"
    },
    {
      id: 2,
      nombre: "Programacion"
    },
    {
      id: 3,
      nombre: "Diseño web"
    }
  ];
  let posts = {
    data: [
      {
        id: 1,
        titulo: "Titulo 1",
        imagen: "",
        contenido: ` Hola
          mundo`,
        autor: "Eleazar Curiel Monjaraz"
      },
      {
        id: 2,
        titulo: "Titulo 2",
        imagen: "",
        contenido: "",
        autor: "Eleazar Curiel Monjaraz"
      },
      {
        id: 3,
        titulo: "Titulo 4",
        imagen: "",
        contenido: "",
        autor: "Eleazar Curiel Monjaraz"
      },
      {
        id: 4,
        titulo: "Titulo 5",
        imagen: "",
        contenido: "",
        autor: "Eleazar Curiel Monjaraz"
      }
    ]
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <Categoria categorias={categorias} />
        </div>
        <div className="col-10">
          <Postlist posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
