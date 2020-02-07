import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
//importar bootstraps
import "bootstrap/dist/css/bootstrap.css";
import "./styles/global.css";

const container = document.getElementById("app");

//reactDOM recibe dos elementos (--que-- , donde)
ReactDOM.render(<App />, container);
