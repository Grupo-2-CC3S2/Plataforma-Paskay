import React, {Component} from 'react';
import './Pregunta.css';

class Solucion extends Component{
   constructor(props){
      super(props)
     this.state = {open: 0}

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

        <div className = "solucion">
          <div onClick = {this.toggle}>Mejor respuesta</div>
            <div className = "resp-p">
              <img alt = "solucion" src = {this.props.sol}></img>
          </div>
        </div>
        )
      }else return(
        <div className = "solucion">
          <div onClick = {this.toggle}>&gt;Mejor respuesta</div>
        </div>
      )
    }
   
}

class Pregunta extends Component {
  /*
   constructor(props){
      super(props)
    }
    
*/
  
  render(){

    
 
  return (
      <div className = "card-p">
        <div className = "head-p">
          Pregunta #{this.props.preg.id}  <span>{this.props.preg.universidad} {this.props.preg.anio}</span>
        </div> 
        <div className = "body-p">
          <img alt = "pregunta" src = {this.props.preg.preg}></img>
        </div>
        <div className = "keywords">
          keywords: 
          {this.props.preg.keywords.map((i,k)=>{
            return(
              <a key = {k} href = "#" >{i}</a>
            )
          })}
        </div>
        <Solucion sol = {this.props.preg.sol}/>
      </div>
  )};
}

export default Pregunta;
