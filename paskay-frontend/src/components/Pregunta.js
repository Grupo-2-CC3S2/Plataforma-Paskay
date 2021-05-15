import React, {Component} from 'react';
import './Pregunta.css';

class Solucion extends Component{
   constructor(props){
      super(props)
     this.state = {open: 1}

      this.toggle = () =>{
        if(this.state.open) {
          this.setState({open:0})
        } else{ 
          this.setState({open:1})}
      }  
    }
    
    render(){
      if(this.state.open){

        return(

        <div>
        <div onClick = {this.toggle}>Mejor respuesta</div>
          <div className = "resp-p">
            <img src = {this.props.sol}></img>
          </div>
        </div>
        )
      }else return(
        <div onClick = {this.toggle}>Mejor respuesta</div>
      )
    }
   
}

class Pregunta extends Component {
   constructor(props){
      super(props)
    }
    

  
  render(){

    const sol = () =>{
      if(0){
        return(
          <div className = "resp-p">

            <div>Mejor respuesta</div>
            <img src = {this.props.preg.sol}></img>
          </div>
        )
      }
    }
 
  return (
    <div className = "container">
      <div className = "card-p">
        <div className = "head-p">
          Pregunta #{this.props.preg.id}  <span>{this.props.preg.universidad} {this.props.preg.anio}</span>
        </div> 
        <div className = "body-p">
          <img src = {this.props.preg.preg}></img>
        </div>
        <div className = "keywords">
          keywords: 
          {this.props.preg.keywords.map((k)=>{

            return(
              <a href = "#" >{k}</a>
            )
          })}
        </div>
        <Solucion sol = {this.props.preg.sol}/>
      </div>
    </div>
  )};
}

export default Pregunta;
