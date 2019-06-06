import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './component/Badge'
//importar bootstraps
import 'bootstrap/dist/css/bootstrap.css'
import './styles/global.css'
const container =document.getElementById('app')

//reactDOM recibe dos elementos (--que-- , donde)
ReactDOM.render(<Badge />, container);
