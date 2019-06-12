import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../img/logo.svg'
import '../styles/Nanvar.css'

class Nanvar extends React.Component{

     render(){
        return (
            <div className="nanvar">
                <div className="container-fluid">
                   <Link className="nanvarbrand nav-link" to="/">
                        <img className="nanvarbrandlogo" src={logo} alt="Logo"/>
                        <span className="font-weight-light">Famsa</span>
                        <span className="font-weight-bold"> Conf</span>
                    </Link>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Active</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Link</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Link</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" href="#">Disabled</Link>
                        </li>
                   </ul>
                </div>
             </div>
         )
     }
}

export default Nanvar;