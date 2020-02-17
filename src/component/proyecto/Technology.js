import React from "react";
const Technology = props => {
  const technology = props.technology.map(tec => {
    return (
      <dt key={tec.id}>
        {tec.name} : {tec.description}
      </dt>
    );
  });
  return (
    <div className="container">
      <p>Tecnologías implementadas para el desarrollo del proyecto.</p>
      <dl>{technology}</dl>
    </div>
  );
};

export default Technology;
