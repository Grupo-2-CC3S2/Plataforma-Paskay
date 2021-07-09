import React, {Component} from 'react';
import './Pregunta.css';
//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge'
import Solucion from '../../Solucion/Solucion';

//================ Información d epregunta de la bbdd ====================
import imgPreg from './../../../imagenes/pregMuestra.jpg'
var idPregunta= 'Pregunta N° 16565';
var opcionesPregunta=['opcion A', 'opcion B', 'opcion C', 'opcion D', 'opcion E'];
var textoPregunta= "Lorem Ipsum is simply dummy text of the printing and typesetting\
industry. Lorem Ipsum has been the industry's standard dummy text \
ever since the 1500s, when an unknown printer took a galley of type \
and scrambled it to make a type specimen book. It has survived not \
only five centuries, but also the leap into electronic typesetting, \
remaining essentially unchanged. It was popularised in the 1960s \
with the release of Letraset sheets containing Lorem Ipsum passages, \
and more recently with desktop publishing software like Aldus \
PageMaker including versions of Lorem Ipsum.";

//================ Fin Información d epregunta de la bbdd ====================



class Pregunta extends Component {

  constructor(props) {
    super(props);
  }

  render(){
      return(
        <div className='container'>
        <div className='row pregContent'>
          <div className='col-md-12 my-3'>
        {/*
            <h3>Pregunta N° {this.props.id}</h3>
            <p>{this.props.texto}</p>
              <img src='./../../../imagenes/solucion.jpg'></img>*/}
            <h3>{idPregunta}</h3>
          </div>
          <div className='col-md-7 p-4 text-left  pregFont'>
            <p>{textoPregunta}</p>
          </div>
          <div className='col-md-5 my-4'>
            <img className='my-4 col-md-12' id='pregPict' src={imgPreg}/>
          </div>
          <div className='col-md-12 my-4 row pregFont'>
            <div className='col-md-4'><h3><Badge variant="secondary">{opcionesPregunta[0]}</Badge></h3></div>
            <div className='col-md-4'><h3><Badge variant="secondary">{opcionesPregunta[1]}</Badge></h3></div>
            <div className='col-md-4'><h3><Badge variant="secondary">{opcionesPregunta[2]}</Badge></h3></div>
            <div className='col-md-4'><h3><Badge variant="secondary">{opcionesPregunta[3]}</Badge></h3></div>
            <div className='col-md-4'><h3><Badge variant="secondary">{opcionesPregunta[4]}</Badge></h3></div>
          </div>
        </div>
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
