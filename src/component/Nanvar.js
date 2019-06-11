import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../img/logo.svg'
import '../styles/Nanvar.css'

class Nanvar extends React.Component{

     render(){
        return (
            <div className="nanvar">
                <div className="container-fluid">
                   <Link className="nanvarbrand" to="/">
                        <img className="nanvarbrandlogo" src={logo} alt="Logo"/>
                        <span className="font-weight-light">Famsa</span>
                        <span className="font-weight-bold"> Conf</span>
                    </Link>
                </div>
             </div>
         )
     }
}

export default Nanvar;