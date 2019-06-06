import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './component/Badge'
//importar bootstraps
import 'bootstrap/dist/css/bootstrap.css'
import './styles/global.css'
const container =document.getElementById('app')

//reactDOM recibe dos elementos (--que-- , donde)
ReactDOM.render(<Badge
                       firstName="Famsa"
                       lastName="Grupo"
                       avatar="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&r=pg&d=404"
                       jobTitle="FrontEnd Enginner"
                       twitter="famsa"/>, container);
