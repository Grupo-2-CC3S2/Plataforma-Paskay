import React, {Component} from 'react';
import './Pregunta.css';
//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge'
import Solucion from '../../Solucion/Solucion';

//================ Información d epregunta de la bbdd ====================
import imgPreg from './../../../imagenes/pregMuestra.jpg'
var idUsuario= '5465456';
var nombreUsuario= 'Diana Ramirez'
var idPregunta= '16565';
var fechaSubida= '06/06/2021';
var opcionesPregunta=['opcion A', 'opcion B', 'opcion C', 'opcion D', 'opcion E'];
var textoPregunta= "Lorem Ipsum is simply dummy text of the printing and typesetting\
industry. Lorem Ipsum has been the industry's standard dummy text \
ever since the 1500s, Soluciohen an unknown printer took a galley of type \
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

  renderImagePregunta = () => {
    if(this.props.pregunta.url_image){
          return (<div className='col-md-12'>
                    <img className='my-4 col-md-12' id='pregPict' src={this.props.pregunta.url_image}/>
                  </div>)

    }else return <div></div>
  }


  idToNumber = (_id) => parseInt(_id.slice(18,24),16)

  render(){
      return(
        <div className='container'>
        <div className='row pregContent'>
          <div className='col-md-12 my-3'>
            <h3>Pregunta N° {this.idToNumber(this.props.pregunta._id)}</h3>
          </div>
          <div className='col-md-12 p-4 text-left  pregFont'>
            <p>{this.props.pregunta.question}</p>
          </div>
          {this.renderImagePregunta()}
          <div className='col-md-12 my-4 row pregFont'>
            <div className='col-md-4'><h3><Badge variant="secondary">{this.props.pregunta.opciones[0]}</Badge></h3></div>
            <div className='col-md-4'><h3><Badge variant="secondary">{this.props.pregunta.opciones[1]}</Badge></h3></div>
            <div className='col-md-4'><h3><Badge variant="secondary">{this.props.pregunta.opciones[2]}</Badge></h3></div>
            <div className='col-md-4'><h3><Badge variant="secondary">{this.props.pregunta.opciones[3]}</Badge></h3></div>
            <div className='col-md-4'><h3><Badge variant="secondary">{this.props.pregunta.opciones[4]}</Badge></h3></div>
          </div>
        </div>
        <div className='row'>
          <div className='col text-left my-4'><p className='grayText'>Autor: {this.props.pregunta.usuario.username} ({this.idToNumber(this.props.pregunta.usuario._id)})</p></div>
          <div className='col text-right my-4'><p className='grayText'>Creado: {this.props.pregunta.createdAt}</p></div>
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
