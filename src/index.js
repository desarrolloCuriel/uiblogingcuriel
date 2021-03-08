import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./styles/global.css";

const container = document.getElementById("app");

//reactDOM recibe dos elementos (--que-- , donde)
ReactDOM.render(<App />, container);
