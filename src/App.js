import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component 
{ constructor(props) {
  super(props);
  this.state ={show: false,
              Person:{
                       fullName:"Naim Chaabene",
                        bio:"Ne en 1989 a Monastir , like traveling ,married and has 2 sons",
                        profession:"Devloppeur web",
                       imgSrc: "../images/me.jpg"
               } 
                        }

  
          }; 

  showhide=()=>{
           this.setState(  { show: !this.state.show});
           var c = document.getElementById("button22");
           console.log(c);
           this.state.show
           ? (c.innerHTML = "show profile")
               : (c.innerHTML = "hide profile");
                  }


  //display the time when the profile component is mounted

  componentDidMount(){
    var p = document.getElementById("showTime");
    var time = new Date().toLocaleTimeString();
    this.state.show
    ? (p.innerHTML = "The time when this profile was showed  " + time)
    : (p.innerHTML = null);
  }



  //display the time when the profile component is mounted again
  componentDidUpdate(){
    var p = document.getElementById("showTime");
    var time = new Date().toLocaleTimeString();
    this.state.show
      ? (p.innerHTML = "The time when this profile was showed  " + time)
      : (p.innerHTML = null);
  }


    render() 
    {             
    return ( 
       <div > 
          <div style={{textAlign:"center"}}>
              <button id="button22" onClick =  {this.showhide}> 
               show profile
               </button>
           </div>


        {this.state.show && (
                          <div  style={{textAlign:"center"}}> 
                               <img  src={this.state.Person.imgSrc } alt="image" />
                               <h1 style={{color:"red"}} >{this.state.Person.fullName}</h1>
                               <h2 >{this.state.Person.profession}</h2>
                               <p >{this.state.Person.bio}</p>
                          </div>
                         )
        }

        <p style={{textAlign:"center"}} id="showTime"></p>
       </div>
    ); 
    } 
}
export default App;
 


