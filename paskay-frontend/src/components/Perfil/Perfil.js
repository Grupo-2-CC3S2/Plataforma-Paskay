import React, {Component} from 'react';
import { useState } from 'react';
import './Perfil.css';
import Pregunta from '../Buscador/Pregunta/Pregunta';
//url de donde está la foto de usuario
import imgPerfil from './../../imagenes/perfil_1.jpg'
//Estoy usando otros iconos
//npm install react-icons
//Luego importas los iconos que usas (la importación es automática, con poner <Fa.../> detecta)
//Fuente: https://dev.to/kevsmss/easiest-way-to-use-icons-in-react-h0o
import {FaEdit, FaEnvelope, FaIdCardAlt, FaSimCard, FaTwitter, FaUserEdit, FaWhatsapp, FaWhatsappSquare} from "react-icons/fa"
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import { Button} from 'react-bootstrap';
import { SyncProblemSharp } from '@material-ui/icons';


class Perfil extends Component {
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
    <div className="container profile">

      <div className="row">
        {/* Mensaje de saludo con el nombre de usuario */}
        <div className="col-md-12 my-3"><p className="headInfo">Bienvenido @Usuario</p></div>
      </div>
      <div className='row'>
        {/* ============== iNFORMACION PERSONAL ====================*/}
        <div id='selfInfo' className='col-md-4 my-2 '>
          <div className='row cardStyle'>
            <div className='col-md-12 text-center my-4'><img id='profilePict' src={imgPerfil} /></div>
            <div className='col-md-12'><h4>Andrea Violeta</h4></div>
            <div className='col-md-12'>(Estudiante de Ingeniería Civil)</div>
            <div className='col-md-12 text grayText'>ID: 626000659</div>
            <div className='col-md-12 text-center my-4' id='aboutYou'>
              'is simply dummy text of the printing and typesetting industry. 
               Lorem Ipsum has been the industry's standard dummy text ever since 
               the 1500s, when an unknown printer took a galley of type and scrambled 
               it to make a type s'.
            </div>
            <div className='col-md-12'><FaEnvelope /> cvasquez@uni.pe</div>
            <div className='col-md-12'><FaWhatsapp /> +51 999 999 999</div>
            <div className='col-md-12 text-center my-3'><hr/><button class='btn btn-lg btn-warning'><FaEdit/>Editar</button></div>
          </div>
        </div>
        {/* ============== FIN iNFORMACION PERSONAL =================*/}
        {/* ============== INFO DE TU ACTIVIDAD =================*/}
        <div id='activityInfo' className='col-md-7 my-2 offset-md-1 cardStyle'>
          <div className='row'>
            <div className='col-md-12 my-4'><h5>Tus ejercicios subidos</h5></div>
            <div className='col-md-12'>
              <table className='table table-responsive'>
                <tr><th>id</th><th>Fecha</th><th>Likes</th><th>Dislikes</th><th>Soluciones</th></tr>
                <tr><td><button onClick={this.openModal} className='btn btn-success'>26626</button></td><td>06/05/2021</td><td>5</td><td>2</td><td>1</td></tr>
                <tr><td><button onClick={this.openModal} className='btn btn-success'>26966</button></td><td>09/06/2021</td><td>1</td><td>0</td><td>0</td></tr>
                <tr><td><button onClick={this.openModal} className='btn btn-success'>26966</button></td><td>09/06/2021</td><td>1</td><td>0</td><td>0</td></tr>
                <tr><td><button onClick={this.openModal} className='btn btn-success'>26966</button></td><td>09/06/2021</td><td>1</td><td>0</td><td>0</td></tr>
                <tr><td><button onClick={this.openModal} className='btn btn-success'>26966</button></td><td>09/06/2021</td><td>1</td><td>0</td><td>0</td></tr>
              </table>  
            </div>
            <div className='col-md-12'><h5>Tus Soluciones compartidas</h5></div>
            <div className='col-md-12 my-4'>
              <table className='table table-responsive'>
                <tr><th>id</th><th>Fecha</th><th>Likes</th><th>Dislikes</th></tr>
                <tr><td><button className='btn btn-success'>26626</button></td><td>06/05/2021</td><td>5</td><td>2</td></tr>
                <tr><td><button className='btn btn-success'>26966</button></td><td>09/06/2021</td><td>1</td><td>0</td></tr>
                <tr><td><button className='btn btn-success'>26966</button></td><td>09/06/2021</td><td>1</td><td>0</td></tr>
                <tr><td><button className='btn btn-success'>26966</button></td><td>09/06/2021</td><td>1</td><td>0</td></tr>
                <tr><td><button className='btn btn-success'>26966</button></td><td>09/06/2021</td><td>1</td><td>0</td></tr>
              </table>  
            </div>
          </div>
        </div>
        {/* ============== Fin INFO DE TU ACTIVIDAD =================*/}
        {/* ============== modal para ver ejercicio =================*/}
        <Modal size='lg' centered show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body><Pregunta/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* ============== fin modal para ver ejercicio =================*/}
        <div className='col-md-12 my-4'></div>
      </div>
    </div>

  
  )};
}

export default Perfil;

