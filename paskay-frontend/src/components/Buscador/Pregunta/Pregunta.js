import React, {Component} from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
//import './Pregunta.css';
import Solucion from '../../Solucion/Solucion';

const Toggle = () => {
  const [show, toggleShow] = React.useState(true);

  return (
    <div>
      <button
        className='btn btn-success my-3'
        onClick={() => toggleShow(!show)}
      >
        {show ? 'Ocultar Solución' : 'Mostrar Solución'}
      </button>    
      {show && <div><Solucion/></div>}
    </div>
  )
}



class Pregunta extends Component {
  render(){
      return(
        <div className='container'>
        <div className='row'>
          <div className='col-md-12 my-3'>
            <h3>Pregunta N° 16565</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy text 
              ever since the 1500s, when an unknown printer took a galley of type 
              and scrambled it to make a type specimen book. It has survived not 
              only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s 
              with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus 
              PageMaker including versions of Lorem Ipsum.</p>
              <img src='./../../../imagenes/solucion.jpg'></img>
          </div>
          <div className='col-md-4'>Opción A</div>
          <div className='col-md-4'>Opción B</div>
          <div className='col-md-4'>Opción C</div>
          <div className='col-md-4'>Opción D</div>
          <div className='col-md-4'>Opción E</div>
        </div>
        <Toggle/>
        </div>
      )}

}

export default Pregunta;

/*
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
/* 
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

*/