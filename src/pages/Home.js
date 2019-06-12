import React from 'react'
import {Link} from 'react-router-dom'
import iconoHome from '../img/platziconf-logo.svg'
import iconoHome2 from '../img/astronauts.svg'
import '../styles/home.css'
class Home extends React.Component {
 render(){
    return (
       <React.Fragment>
        <div className='homeheader'>
            <dir className='colum-text'>
                <img src={iconoHome} alt="Logo manager"/>
                <h1>BADGE MANAGEMENT SYSTEM</h1>
                 <p>
                     <Link className='btn btn-primary' to="/badges">Start</Link>
                 </p>
            </dir>
            <dir className='colum-logo'>
                <img src={iconoHome2} alt="Logo Home"/>
            </dir>
         </div>
      </React.Fragment>
      )
 }
}

export default Home;

