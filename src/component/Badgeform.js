import React from 'react'

class Badgeform extends React.Component{
  state={};

  handleChage=e=>{
   //   console.log({name:e.target.name,
   //                value:e.target.value});
   this.setState(
     {
       [e.target.name]:e.target.value,
     }
   )

  }
  handleClick=e=>{
    console.log('Algo sucedio');
    }
    handleOnsubmit=e=>{
        e.preventDefault();
        console.log("evento onSubmit")
        console.log(this.state)
    }
  render(){
      return (
         <div>
             <h1>New Attendant</h1>
             <form onSubmit={this.handleOnsubmit}>
               <div className="form-group">
                   <label>First Name</label>
                   <input onChange={this.handleChage} className="form-control" type="text" name="firstname" value={this.state.firstname}/>
               </div>
               <div className="form-group">
                   <label>Last Name</label>
                   <input onChange={this.handleChage} className="form-control" type="text" name="lastname" value={this.state.lastname}/>
               </div>
               <div className="form-group">
                   <label>Email</label>
                   <input onChange={this.handleChage} className="form-control" type="email" name="email" value={this.state.email}/>
               </div>
               <div className="form-group">
                   <label>Job Title</label>
                   <input onChange={this.handleChage} className="form-control" type="text" name="jobtitle" value={this.state.jobtitle}/>
               </div>
               <div className="form-group">
                   <label>twitter</label>
                   <input onChange={this.handleChage} className="form-control" type="text" name="twitter" value={this.state.twitter}/>
               </div>
               <button onClick={this.handleClick} className="btn btn-primary">Save</button>
             </form>
         </div>
       );
  }

}

export default Badgeform;