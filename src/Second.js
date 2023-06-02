import { Component } from 'react';
import "./App.css"

class Second extends Component {
  
    state={
      name:"",
      department:"",
      rating:"",
      data:[]
     }

     handleClick=()=>{
      let obj={
        name:this.state.name,
        department:this.state.department,
        rating:this.state.rating,
      }
      this.state.data.push(obj);
      this.setState({data:this.state.data,name:"",department:"",rating:""})
      console.log(this.state.data)
     }

     handleChange=(event)=>{
      this.setState({[event.target.name]:event.target.value})
     }
   
     render(){
         return (
      < div className="main">
      <label className="label">Name:</label>
      <input className="input" type="text" name="name" onChange={this.handleChange} placeholder="Enter Your Name" value={this.state.name}/>
      <br/><br/>
      <label className="label">Department:</label>
      <input className="input"  type="text" name="department" onChange={this.handleChange}  placeholder="Enter Your Department"  value={this.state.department}/>
      <br/><br/>
      <label className="label">Rating:</label>
      <input className="input"  type="number" name="rating" onChange={this.handleChange}  placeholder="Enter Your Rating"  value={this.state.rating}/>   
      <br/><br/>
      <button className="submit" onClick={this.handleClick}>Submit</button>
      <div className='arr'>
      {this.state.data.map((item)=>{
        return(
          <h2 className="span">Name={item.name} || Department={item.department} || rating={item.rating}</h2>
        )
      })}
      </div>
      </div>
     );
  }
}
export default Second;
