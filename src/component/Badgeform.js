import React from 'react'

class Badgeform extends React.Component{

  handleChage=e=>{
      console.log({name:e.target.name,
                   value:e.target.value});
  }
  handleClick=e=>{
    console.log('Algo sucedio');
    }
    handleOnsubmit=e=>{
        e.preventDefault();
        console.log("evento onSubmit")
    }
  render(){
      return (
         <div>
             <h1>New Attendant</h1>
             <form onSubmit={this.handleOnsubmit}>
               <div className="form-group">
                   <label>First Name</label>
                   <input onChange={this.handleChage} className="form-control" type="text" name="firstname"/>
               </div>
               <button onClick={this.handleClick} className="btn btn-primary">Save</button>
             </form>
         </div>
       );
  }

}

export default Badgeform;