import React, {Component} from 'react';
import { useState } from 'react';
import './Resultados.css';
import Pregunta from '../Pregunta/Pregunta';
import Solucion from '../../Solucion/Solucion';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import { Button} from 'react-bootstrap';
import {FaEdit, FaThumbsUp, FaThumbsDown, FaComment, FaResolving, FaPencilRuler, FaUpload} from "react-icons/fa"

// ========== Variables de prueba ===========
import { testPregunta1} from '../../../resources/testVariables';
import { idPregunta1 } from '../../../resources/testVariables';
// ========== Variables de prueba ===========


// =================== Mostrar-ocultar solucion =================
const VerSolucion = () => {
  const [show, toggleShow] = React.useState(false);
  const [Upl, toggleUpl] = React.useState(false);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 text-center my-4'>
          <button
            className='btn btn-success'
            onClick={() => toggleShow(!show)}
          >
            <FaPencilRuler/>
            {show ? ' Ocultar ' : ' Ver solución '}
            <span class="badge badge-light">4</span>
          </button>
        </div>
        <div className='col-md-6 text-center my-4'>
          <button
            className='btn btn-danger'
            onClick={() => toggleUpl(!Upl)}
          >
            <FaUpload/>
            {Upl ? ' Ocultar ' : ' Subir solución '}
          </button>
        </div>
      </div>   
      {show && 
        <div className='row'>
          <div className='col-md-12 text-center'><Solucion/></div>
        </div>
      }
      {Upl && 
        <div className='row'>
          <select>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
            <option>NA</option>
          </select>
          <div className='col-md-12 text-center'><input type='file'></input></div>

        </div>
      }
    </div>
  )
}

// ===================Fin Mostrar-ocultar solucion =================


 
class Resultados extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      //Modal cerrado al inicio
      isOpen: false,
      //Variables para likes y dislikes
      like: 23,
      dislike: 3,
      likeActive: false,
      dislikeActive: false
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

  // ****************** maneja likes y dislikes *********
  setDislike() {
    this.setState({
      dislikeActive: !this.state.dislikeActive,
      dislike: this.state.dislikeActive
        ? this.state.dislike - 1
        : this.state.dislike + 1
    });
  }
  setLike() {
    this.setState({
      likeActive: !this.state.likeActive,
      like: this.state.likeActive ? this.state.like - 1 : this.state.like + 1
    });
  }
  handleLike() {
    if (this.state.dislikeActive) {
      this.setLike();
      this.setDislike();
    }
    this.setLike();
  }

  handleDislike() {
    if (this.state.likeActive) {
      this.setDislike();
      this.setLike();
    }
    this.setDislike();
  }
  // ****************** fin maneja likes y dislikes *********
  
  render(){
  return (
    <div>
    {/*========RESULTADoS DE BUSQUEDA =============== */}
      <div className='row text-left my-2'>
        <div className='col-md-12'>
          <h5 className=''>Pregunta- ID {parseInt(this.props.pregunta._id.slice(18,24),16)}</h5>
          <p className='text-left ones-chars' >{this.props.pregunta.question}</p>
          <button className='btn btn-warning' onClick={this.openModal}>Ver más...</button> 
        </div>
        <div className='col-md-6 my-4'>
          <FaThumbsUp/> <span class="badge badge-light active">4</span>
          <FaThumbsDown/> <span class="badge badge-light">4</span>
                
      </div>
        <div className='col-md-6 text-right my-4'>
        <div className=' text-right' >
          <FaComment/> <span class="badge badge-light active">4</span>
        </div>
        </div>
        <div className='col-md-12'><hr></hr></div>
      </div>  
    {/*========FIN RESULTADoS DE BUSQUEDA =============== */}
    {/* ============== modal para ver ejercicio =================*/}
      <Modal size='lg' centered show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
          <Modal.Title className='text-center'>Información</Modal.Title>
          </Modal.Header>
          {/* Plantilla de Pregunta */}
          <Modal.Body><Pregunta pregunta = {this.props.pregunta} id = {this.props.id} question = {this.props.question} opciones = {this.props.opciones} /></Modal.Body>
          <Modal.Body>
          {/* *************** Area para la pregunta ***************** */}
          <div className='container'>
            <div className='row'>
              <div className='col text-left' >
                <button className="btn btn-primary"
                  onClick={() => this.handleLike()}
                  
                >
                  <FaThumbsUp/> <span class="badge badge-light active">{this.props.pregunta.likes}</span>
                </button>
                <button className="btn btn-primary mx-2"

                  onClick={() => this.handleDislike()}
                >
                  <FaThumbsDown/> <span class="badge badge-light">{this.props.pregunta.dislikes}</span>
                </button>
              </div>
              <div className=' text-right' >
                <button type="button" class="btn btn-primary mx-2" disabled>
                  <FaComment/> <span class="badge badge-light active">4</span>
                </button>
              </div>
            </div>
          </div>
          </Modal.Body>
          {/* ***************Fin Area para la pregunta ***************** */}
          <Modal.Body><VerSolucion/></Modal.Body>
          {/* *************** Area para comentarios ************** */}
          <Modal.Body>
          <hr/>
            <div className='col-md-12'>
                <h4>Comentarios (2)</h4>
            </div>
          <div className='container text-left'>
          <div className='row'>
            <div class='col-md-12 my-2'>
              <p className='grayText'>Escribe un comentario...</p>
              <textarea class='col-md-12'></textarea>
            </div>
            <div class='col-md-12 my-2 text-right'><button type='reset' className='btn btn-success'>Enviar</button></div>
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
