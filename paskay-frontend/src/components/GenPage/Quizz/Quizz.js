import React, {Component} from 'react';
import { useState } from 'react';
import './Quizz.css';
import {FaCheck, FaComment, FaEdit, FaEnvelope, FaIdCardAlt, FaList, FaSimCard, FaTwitter, FaUserEdit, FaWhatsapp, FaWhatsappSquare} from "react-icons/fa"
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import { Alert, Button} from 'react-bootstrap';
import { SyncProblemSharp } from '@material-ui/icons';

//================= PREGUNTAS PRUEBA 1 ======================
const preguntasP1 = [
  {
    questionText: 'P1 What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
      { answerText: 'Dublin', isCorrect: false }
    ],
  },
  {
    questionText: 'P1 Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
      { answerText: 'Dublin', isCorrect: false }
    ],
  },
  {
    questionText: 'P1 The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
      { answerText: 'Dublin', isCorrect: false }
    ],
  },
  {
    questionText: 'P1 How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false }
    ],
  },
];
//================= PREGUNTAS PRUEBA 2 ======================

const preguntasP2 = [
  {
    questionText: 'P2 What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
      { answerText: 'Dublin', isCorrect: false }
    ],
  },
  {
    questionText: 'P2 Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
      { answerText: 'Dublin', isCorrect: false }
    ],
  },
  {
    questionText: 'P2 The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
      { answerText: 'Dublin', isCorrect: false }
    ],
  },
  {
    questionText: 'P2 How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false }
    ],
  },
];
//================= PREGUNTAS PRUEBA 3 ======================

const preguntasP3 = [
  {
    questionText: 'P3 What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
      { answerText: 'Dublin', isCorrect: false }
    ],
  },
  {
    questionText: 'P3 Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
      { answerText: 'Dublin', isCorrect: false }
    ],
  },
  {
    questionText: 'P3 The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
      { answerText: 'Dublin', isCorrect: false }
    ],
  },
  {
    questionText: 'P3 How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false }
    ],
  },
];


//=================FIN  PREGUNTAS PRUEBA======================

//================= Datos de las preguntas ======================
const questions = [
  {
    questionText: 'Cinco empresas venden el mayor número de autos en el país: Ford, Toyota, Datsun, \
    Susuki y Nissan. Determine  el  orden  del  mayor  al  menor número de autos vendidos, si se sabe que: \
    I.  Toyota duplicó las ventas del último.\
    II.  Susuki  vendió  solo  10%  menos  que Toyota pero más que Datsun y Ford.\
    III.  Nissan vendió 20% más que Ford pero menos que Susuki.\
    IV.  Ford vendió un poco más que Datsun.',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
      { answerText: 'Dublin', isCorrect: false }
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
      { answerText: 'Dublin', isCorrect: false }
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
      { answerText: 'Dublin', isCorrect: false }
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false }
    ],
  },
];
//=================Fin Datos de las preguntas ======================

class Quizz extends Component {
  constructor(props) {
    super(props);
    //this.currentPart=preguntasP1;
    this.state={
      currentQuestion: 0,
      setCurrentQuestion: 0,
      showScore: false,
      score: 0,
      //Mostrar sección de exámen
      showP1: true,
      showP1: false,
      showP1: false,
      disabBot: [false, true, true],
      currentId: 1 ,
      currentPart: {}
    }

    this.nextQuestion=()=>{  
      if (this.state.currentQuestion+1 < questions.length) {
        this.setState({ currentQuestion: this.state.currentQuestion + 1 });
      } else {
        var disabBots=[true, true, true];
        disabBots[this.state.currentId]=false;
        this.setState({showScore: true, disabBot: disabBots});
      }
    };

    this.resetPart=()=>{
      this.setState({
        currentQuestion: 0,
        setCurrentQuestion: 0,
        showScore: false,
        score: 0,
        currentId: this.state.currentId + 1
      });
    }

    this.countScore=(answCorrect)=>{
       if(answCorrect) this.setState({ score: this.state.score +1});
    };

    this.setExamPart=()=>{
      if(this.state.showP1) this.setState({ currentPart: preguntasP1});
   };
  }

  render(){
  return (

    
    <div className="wrapper-quizz">
    <div className="container">
      <div className="row">
        
        <div className='col-md-12 text-left'>
          <h5 className='text-center'>PRIMERA PRUEBA</h5>
          <table className="table my-4">
             <tr>
              <td><h6>NOMBRE</h6></td>
              <td><h6><FaCheck/> BUENAS</h6></td>
              <td><h6><FaList/> PUNTAJE</h6></td>
            </tr>
            <tr>
              <td><h6>RAZONAMIENTO MATEMÁTICO</h6></td>
              <td><h6>20/50</h6></td>
              <td><h6>150</h6></td>
            </tr>
            <tr>
              <td><h6>RAZONAMIENTO VERBAL</h6></td>
              <td><h6>20/50</h6></td>
              <td><h6>150</h6></td>
            </tr>
            <tr>
              <td><h6>HUMANIDADES</h6></td>
              <td><h6>20/50</h6></td>
              <td><h6>150</h6></td>
            </tr>
            <tr>
              <td><h6>TOTAL</h6></td>
              <td><h6>60/150</h6></td>
              <td><h6>450</h6></td>
            </tr>
          </table>
        </div>

        <div className='col-md-12 text-left'>
          <h5 className='text-center'>SEGUNDA PRUEBA</h5>
          <table className="table my-4">
             <tr>
              <td><h6>NOMBRE</h6></td>
              <td><h6><FaCheck/> BUENAS</h6></td>
              <td><h6><FaList/> PUNTAJE</h6></td>
            </tr>
            <tr>
              <td><h6>MATEMÁTICA</h6></td>
              <td><h6>20/50</h6></td>
              <td><h6>150</h6></td>
            </tr>
            <tr>
              <td><h6>TOTAL</h6></td>
              <td><h6>60/150</h6></td>
              <td><h6>450</h6></td>
            </tr>
          </table>
        </div>

        <div className='col-md-12 text-left'>
          <h5 className='text-center'>TERCERA PRUEBA</h5>
          <table className="table my-4">
             <tr>
              <td><h6>NOMBRE</h6></td>
              <td><h6><FaCheck/> BUENAS</h6></td>
              <td><h6><FaList/> PUNTAJE</h6></td>
            </tr>
            <tr>
              <td><h6>FÍSICA</h6></td>
              <td><h6>20/50</h6></td>
              <td><h6>150</h6></td>
            </tr>
            <tr>
              <td><h6>QUÍMICA</h6></td>
              <td><h6>20/50</h6></td>
              <td><h6>150</h6></td>
            </tr>
            <tr>
              <td><h6>TOTAL</h6></td>
              <td><h6>60/150</h6></td>
              <td><h6>450</h6></td>
            </tr>
          </table>
        </div>

      </div>
      <div className='row'>
        {/* ======================BOTONES PARA MOSTRAR LAS PARTES ===================== */}
        <div className='col-md-4'>
          <button
          disabled={this.state.disabBot[0]} 
          onClick={() => {this.setState({
            showP1: true,
            showP2: false,
            showP3: false,
            currentPart: preguntasP1
          })}}
          type="button" class="btn btn-primary mx-2">
            PRUEBA 1 <span class="badge badge-light active">4</span>
          </button>  
        </div>

        <div className='col-md-4'>
          <button
          disabled={this.state.disabBot[1]} 
          onClick={() => {this.setState({
            currentPart: preguntasP2
          }); this.resetPart();}}
          type="button" class="btn btn-primary mx-2">
            PRUEBA 2 <span class="badge badge-light active">4</span>
          </button>  
        </div>

        <div className='col-md-4'>
          <button
          disabled={this.state.disabBot[2]}
          onClick={() => {this.setState({
            currentPart: preguntasP3
          }); this.resetPart()}}
          type="button" class="btn btn-primary mx-2">
            PRUEBA 3 <span class="badge badge-light active">4</span>
          </button>  
        </div>
        {/* ======================MOSTRAR LAS PARTES DEL EXAMEN ===================== */}
        {//Mostrar prueba 1
        !this.state.showP1? null: 
        <div className='col-md-12'>
          {//Contenido de la Prueba 1
          this.state.showScore ? (
			    <div className='row score-section'>
            <div className='col-md-12 text-center'><h4>{this.state.score} pregunta correcta de {this.state.currentPart.length}</h4></div>
          </div>
			    ) : (
				  <div className='row'>
						<div className='question-count col-md-12'>
							<span>{this.state.currentQuestion+1}</span>/{this.state.currentPart.length}
						</div>
						<div className='col-md-12 question-text'>
              {/* Muestra el texto de la pregunta */}
              {this.state.currentPart[this.state.currentQuestion].questionText}
            </div>
					  <div className='col-md-12 row'>
            {this.state.currentPart[this.state.currentQuestion].answerOptions.map((answerOption, index) => (
            /* Muestra las 5 opciones de las preguntas */
              <div className='col-md-4'>
                <button className='btn btn-primary my-2 w-50' onClick={()=>{
                  this.countScore(answerOption.isCorrect); 
                  this.nextQuestion();}}>
                {answerOption.answerText}
                </button>
              </div>
            ))}
					  </div>    
          </div>
			    )}
        </div>}
        {/* ======================FIN MOSTRAR LAS PARTES DEL EXAMEN ===================== */}        
      </div>
    </div> 
    </div>

  
  )};
}

export default Quizz;

