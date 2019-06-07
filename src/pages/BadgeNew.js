import React from 'react';
import Nanvar from '../component/Nanvar.js'
import header from '../img/badge-header.svg'
import Badge from '../component/Badge.js'
import '../styles/BadgeNew.css'
class BadgeNew extends React.Component{

     render(){
        return (
            <div>
                <Nanvar />
                <div className="badgenewheader">
                    <img className="img-fluid" src={header} alt="Logo"></img>
                </div>
                <div className="container">
                    <div className="row">
                       <div className="col">
                        <Badge firstName="Eleazar"
                               lastName="Curiel Monjaraz"
                               twitter="curiel93"
                               jobTitle="Desarrollador full stac"
                               avatarUrl=""/>
                       </div>
                    </div>
                </div>
            </div>
         );
     }
}

export default BadgeNew;