import React from 'react';
import logo from '../img/logo.svg'
import '../styles/Nanvar.css'

class Nanvar extends React.Component{

     render(){

        return (
            <div className="nanvar">
                <div className="container-fluid">
                   <a className="nanvarbrand" href="/">
                        <img className="nanvarbrandlogo" src={logo} alt="Logo"/>
                        <span className="font-weight-light">Famsa</span>
                        <span className="font-weight-bold"> Conf</span>
                    </a>
                </div>
             </div>
         )
     }
}

export default Nanvar;