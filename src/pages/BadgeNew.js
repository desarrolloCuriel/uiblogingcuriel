import React from 'react';
import Nanvar from '../component/Nanvar.js'
import header from '../img/badge-header.svg'
import Badge from '../component/Badge.js'
import BadgeForm from '../component/Badgeform.js'
import '../styles/BadgeNew.css'
class BadgeNew extends React.Component{
    state={form:{
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:'',
    }};

    hadleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
               [e.target.name]:e.target.value
            },
        })
    }
     render(){
        return (
            <div>
                <Nanvar />
                <div className="badgenewheader">
                    <img className="img-fluid" src={header} alt="Logo"></img>
                </div>
                <div className="container">
                    <div className="row">
                       <div className="col-6">
                            <Badge firstName={this.state.form.firstname}
                               lastName={this.state.form.lastname}
                               twitter={this.state.form.twitter}
                               jobTitle={this.state.form.jobtitle}
                               avatarUrl=""/>
                       </div>
                       <div className="col-6">
                            <BadgeForm onChange={this.hadleChange} formValues={this.state.form}/>
                       </div>
                    </div>
                </div>
            </div>
         );
     }
}

export default BadgeNew;