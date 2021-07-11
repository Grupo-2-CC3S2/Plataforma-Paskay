import React, {Component} from 'react';
import { useState } from 'react';
import './Resultados.css';
import Pregunta from '../Pregunta/Pregunta';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import { Button} from 'react-bootstrap';
import {FaEdit, FaThumbsUp, FaThumbsDown, FaComment, FaResolving, FaPencilRuler} from "react-icons/fa"

// ========== Variables de prueba ===========
import { testPregunta1} from '../../../resources/testVariables';
import { idPregunta1 } from '../../../resources/testVariables';
// ========== Variables de prueba ===========
 
class Resultados extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      //Modal cerrado al inicio
      isOpen: false
    }
    //Set state para mostrar y ocultar modal
    this.openModal = () => this.setState({ isOpen: true });
    this.closeModal = () => this.setState({ isOpen: false });
      
    // Binding this keyword
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    // Changing state
    this.setState({msg : 'Welcome to the React world!'})
  }
  
  render(){
  return (
    <div className='container'>
    {/*========RESULTADoS DE BUSQUEDA =============== */}
      <div className='row list-group-item text-left'>
        <div className='col-md-12'>
          <h5 className=''>Pregunta N° {idPregunta1}</h5>
          <p className='text-left ones-chars' >{testPregunta1}</p>
          <button className='btn btn-warning' onClick={this.openModal}>Ver más...</button>
        </div>
        <div className='col-md-12'>
          <hr></hr>  
          <p>comentarios(5)</p><p className='text-right'>Likes/Dislikes</p>
        </div>  
      </div>  
    {/*========FIN RESULTADoS DE BUSQUEDA =============== */}
    {/* ============== modal para ver ejercicio =================*/}
      <Modal size='lg' centered show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
          <Modal.Title className='text-center'>Información</Modal.Title>
          </Modal.Header>
          {/* Plantilla de Pregunta */}
          <Modal.Body><Pregunta/></Modal.Body>
          <Modal.Body>
          {/* *************** Area para la pregunta ***************** */}
            <div className='row'>
              <div className='col-md-6'>
                <button type="button" class="btn btn-primary mx-2">
                  <FaThumbsUp/> <span class="badge badge-light active">4</span>
                </button>
                <button type="button" class="btn btn-primary mx-2">
                  <FaThumbsDown/> <span class="badge badge-light">4</span>
                </button>
                <button type="button" class="btn btn-primary" disabled>
                  <FaComment/> <span class="badge badge-light">4</span>
                </button>
              </div>
              <div className='col-md-6 text-right'>
                <button type="button" class="btn btn-success">
                  <FaPencilRuler/> Soluciones <span class="badge badge-light">4</span>
                </button>
              </div>
            </div>
          {/* ***************Fin Area para la pregunta ***************** */}
          </Modal.Body>
          <Modal.Body>
          {/* *************** Area para comentarios ************** */}
          <hr/>
            <div className='col-md-12 my-4'>
                <h4>Comentarios (4)</h4>
            </div>
          <div className='container text-left'>
            <div className='row'>
              
              <div className='col-md-6'>
                <h5>Juan Carlos Valles </h5>
              </div>
              <div className='col-md-6'>
              <p className='text-right grayText'>ID: 5466566</p>
              </div>
              <div className='col-md-12'>
              <p className=''>
                1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged
              </p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <h5>Juan Carlos Valles </h5>
              </div>
              <div className='col-md-6'>
              <p className='text-right grayText'>ID: 5466566</p>
              </div>
              <div className='col-md-12'>
              <p className=''>
                1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged
              </p>
              </div>
            </div>
          </div>
          {/* ***************Fin Area para comentarios ************** */}  
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* ============== fin modal para ver ejercicio =================*/}
    </div>
  
  )};
}

export default Resultados;
