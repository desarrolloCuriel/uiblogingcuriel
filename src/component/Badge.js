import React from 'react'
import logoPrincipal from '../img/badge-header.svg'
import "../styles/Badg.css"

class Badge extends React.Component{
render(){
    return(
    <div className="Badge">
        <div className="BadgeHeader">
           <img src={logoPrincipal} alt="Logo principal"></img>
        </div>
         <div className="BadgeName">
            <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&r=pg&d=404" alt="Avatar"></img>
            <h1>Eleazar <br/> Curiel</h1>
         </div>
         <div className="BadgeSectionInfo">
             <p>Frontend Engineer</p>
             <p>@eleazarC</p>
          </div>
          <div className="BadgeFooter">
              #famsa
          </div>
    </div>
    )
 }
}


export default Badge;