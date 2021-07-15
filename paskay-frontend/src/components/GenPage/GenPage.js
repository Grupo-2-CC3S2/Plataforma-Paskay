
import React, {Component} from 'react';
import { connect } from 'react-redux'
import ExamGen from '../ExamenGenerado/ExamGen';
import PreguntaDeExamen from '../ExamenGenerado/PreguntaDeExamen/PreguntaDeExamen';
import './../commonStyles.css'
import {changeTest2} from '../../redux/ActionCreators';
import Modal from 'react-bootstrap/Modal'
import { Button} from 'react-bootstrap';

// ============== Variables de muestra ===============
  const titRM=['RM/ PREGUNA 1', 'RM/ PREGUNA 2', 'RM/ PREGUNA 3', 'RM/ PREGUNA 4', 'RM/ PREGUNA 5'];
  const titLetras=['LETRAS/ PREGUNA 1', 'LETRAS/ PREGUNA 2', 'LETRAS/ PREGUNA 3', 'LETRAS/ PREGUNA 4', 'LETRAS/ PREGUNA 5'];
  const titMate=['MATEMÁTICA/ PREGUNA 1', 'MATEMÁTICA/ PREGUNA 2', 'MATEMÁTICA/ PREGUNA 3', 'MATEMÁTICA/ PREGUNA 4', 'MATEMÁTICA/ PREGUNA 5'];
  const titFisica=['FÍSICA/ PREGUNA 1', 'FÍSICA/ PREGUNA 2', 'FÍSICA/ PREGUNA 3', 'FÍSICA/ PREGUNA 4', 'FÍSICA/ PREGUNA 5'];
  const titQuim=['QUÍMICA/ PREGUNA 1', 'QUÍMICA/ PREGUNA 2', 'QUÍMICA/ PREGUNA 3', 'QUÍMICA/ PREGUNA 4', 'QUÍMICA/ PREGUNA 5'];


// ============== Variables de muestra ===============

function mapStateToProps(state) {
  console.log("stateee",state)
  return {
    isOpen: false,
    test: state.test.testState2
  }
}

class GenPage extends Component {

   constructor(props){
     super(props)

     this.state = {
      contRM: 0,
      //tituloModal:titRM[{contRM}], 
      tituloModal: '',
      user: "Sin usuario"}

     //Set state para mostrar y ocultar modal
      this.openModal = () => this.setState({ isOpen: true });
      this.closeModal = () => this.setState({ isOpen: false });
       //Alterar titulo
       this.alterTit=()=>this.setState({tituloModal: 'aea'})
       
    }
 
  obtenerDatos = () => {
    fetch('http://localhost:3001/generador')
        .then(response => response.json())
        .then(data => this.setState({ user: data.username }));
    
  }


  render(){
  return (
    <div className = "container homepage page">
      <div className="row my-2">
        <div className="col-md-12 my-4"><h3>GENERADOR DE EXÁMENES</h3><hr/></div>
      </div>
      <div className="row">
      <div className="col-md-3 cardStyle p-2">
        <div className="col-md-12">
          <h5>Institución</h5>
          <select className="form-control">
            <option>UNI</option>
            <option>UNMSM</option>
            <option>UNAC</option>
            <option>UNFV</option>
          </select>
        </div>
        <div className="col-md-12 my-3">
          <h5>Tipo de exámen</h5>
          <select className="form-control">
            <option>Exámen de Admisión</option>
            <option>Simulacro de Admisión</option>
          </select>
        </div>
        <div className="col-md-12 my-3">
          <h5>Duración</h5>
          <input value="Tiempo real" disabled></input>
        </div>
        <div className="col-md-12 my-3">
          <input className="form-check-input" type="checkbox"></input>
          <label className="form-check-label">Ajustar Tiempo</label>
        </div>
        <div className="row">
        <div className="col-md-6 my-3">
          <input type="number" className="form-control" placeholder="hrs." disabled></input>
        </div>
        <div className="col-md-6 my-3">
          <input type="number" className="form-control" placeholder="min." disabled></input>
        </div>
        </div>
        <div className="col-md-12 my-3">
          <button className="form-control my-4 btn btn-success">Generar</button>
          <button onClick = {() => {this.props.dispatch(changeTest2("User logged"));console.log(this.props)}} className="form-control my-4 btn btn-success">Obtener Usuario</button>
          <div>
            {this.props.test}
          </div>
        </div>
      </div>
      <div className='col-md-1 my-4'></div>
      <div className="col-md-8 cardStyle p-4">
        <div className="col-md-12"><h4>Resumen</h4></div>
        <div className="col-md-12">
          <table className="table">
            <tr>
              <td>Fecha: 27/05/21</td><td>Hora de inicio: 20:00 hrs</td>
              <td>Duración: 180 min.</td><td>Hora fin: 23:00</td>
            </tr>
          </table>
        </div>
        <div className="row">
          <div className="col-md-6 my-3">
            <h5>RM </h5>
            <button>P1</button><button>P2</button><button>P1</button>
            <button>P3</button><button>P4</button><button>P5</button>
          </div>
          <div className="col-md-6 my-3">
            <h5>Letras</h5>
            <button>P1</button><button>P2</button><button>P1</button>
            <button>P3</button><button>P4</button><button>P5</button>
          </div>
          <div className="col-md-6 my-3">
            <h5>Matemática</h5>
            <button>P1</button><button>P2</button><button>P1</button>
            <button>P3</button><button>P4</button><button>P5</button>
            <button>P6</button><button>P7</button><button>P8</button>
            <button>P9</button><button>P10</button>
          </div>
          <div className="col-md-6 my-3">
            <h5>Física</h5>
            <button>P1</button><button>P2</button><button>P1</button>
            <button>P3</button><button>P4</button><button>P5</button>
          </div>
          <div className="col-md-6 my-3">
            <h5>Química</h5>
            <button>P1</button><button>P2</button><button>P1</button>
            <button>P3</button><button>P4</button><button>P5</button>
          </div>
          <div className="col-md-12">
            <p>*Para empezar, haga click en el botón 'Empezar' o en el número de pregunta*</p>
            <button className="btn btn-warning btn-lg" onClick={this.openModal}>EMPEZAR</button>
          </div>
          <div className="col-md-12 my-4"></div>
        </div>
      </div>
      <div className="row">
      </div>
      {/* =========================MODAL DE PREGUNTAS =========================== */}
      <Modal size='lg' centered show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
          <Modal.Title className='text-center'>RM/ PREGUNTA N° 1 {this.state.tituloModal}</Modal.Title>
          </Modal.Header>
          {/* Plantilla de PreguntaExamen */}
          <Modal.Body><PreguntaDeExamen/></Modal.Body>
          <Modal.Body>
            <div className= 'row'>
            <div className='col-md-6 text-left'><Button onClick={this.alterTit}>Anterior</Button></div>
            <div className='col-md-6 text-right'><Button>Siguiente</Button></div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* ============== fin modal de pregunta=================*/}
      </div>
    </div>
  )};
}


//connect(mapStateToProps)(MyComponent)
export default connect(mapStateToProps,null/*mapStateToProps,mapDispatchToProps*/)(GenPage);
