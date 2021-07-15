import React, {Component} from 'react';
import { useState } from 'react';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Solucion.css';
//Para hacer zomm en imagenes
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {FaEdit, FaEye, FaScroll, FaSearchPlus,FaSearchMinus } from "react-icons/fa"
import Alert from 'react-bootstrap/Alert'


//================ Información de solucion de la bbdd ====================
import imgSol from './../../imagenes/solMuestra.png';
import { faSearchMinus, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
var idUsuario= '5465456';
var nombreUsuario= 'Diana Ramirez'
var fechaSubida= '06/06/2021';
var idSol= '16565';
var commentSol= "Lorem Ipsum is simply dummy text of the printing and typesetting\
industry. Lorem Ipsum has been the industry's standard dummy text \
ever since the 1500s, when an ";

//================ Fin Información de solucion de la bbdd ====================

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant="warning" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Para hacer ZOOM</Alert.Heading>
        <p>
          junta y separa los dedos , o usa la rueda del mouse.
        </p>
        <FaSearchPlus/> <FaSearchMinus/>
      </Alert>
    );
  }
  return <div className='text-right'><Button onClick={() => setShow(true)}><FaEye></FaEye></Button></div>;
}

class Solucion extends Component {
  render(){
      return(
        <div className='container'>
          <div className='row'>
            <div className='solContent'>
            <div className='col-md-12 my-3'>
                <h3>ID-Solución {idSol}</h3>
                <div className='col-md-12 my-3'>
                  <AlertDismissibleExample />
              </div>
                <TransformWrapper>
                  <TransformComponent>
                    <img className='col-md-12 solPict' src={imgSol} zoomSrc={imgSol}></img>
                  </TransformComponent>
                </TransformWrapper>
              </div>
                  <div className='col-md-12 my-3'>
                <p className='solFont'>Comentario: {commentSol}</p>
              </div>
              </div>
              <div className='col my-4 text-left'><p className='grayText'>Autor: {nombreUsuario} ({idUsuario})</p></div>
              <div className='col my-4 text-right'><p className='grayText'>{fechaSubida}</p></div>
            
          </div>
        </div>
      )}

}

export default Solucion;

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

class Solucion extends Component {
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
          Solucion #{this.props.preg.id}  <span>{this.props.preg.universidad} {this.props.preg.anio}</span>
        </div> 
        <div className = "body-p">
          <img alt = "Solucion" src = {this.props.preg.preg}></img>
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

export default Solucion;

*/