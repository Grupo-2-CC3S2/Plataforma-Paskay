import React, {Component} from 'react';
import { useState } from 'react';
import './Quizz.css';
import {FaArrowLeft, FaArrowRight, FaCheck, FaCheckSquare, FaComment, FaEdit, FaEnvelope, FaIdCardAlt, FaList, FaSimCard, FaTwitter, FaUserEdit, FaWhatsapp, FaWhatsappSquare} from "react-icons/fa"
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import { Alert, Button} from 'react-bootstrap';
import { SyncProblemSharp } from '@material-ui/icons';


//================= PREGUNTAS PRUEBA 1 ======================
const preguntasP1 = [
  {
    questionText: 'Se está construyendo un tramo de una carretera, para lo cual se necesitan 1 800 m3 de arena gruesa, 14 400 m3 de tierra dura, 10 800 m3 de piedra chancada, 9 000 m3 de roca blanda y 3 600 m3 de roca dura. Si los precios del metro cúbico de cada uno de estos terrenos está dado por 15,40; 25,30; 35,20; 44 y 126,5 soles, respectivamente. Determine el precio medio (en soles) del metro cúbico de terreno.', answerOptions: [
      { answerText: '37', isCorrect: false },
      { answerText: '39', isCorrect: false },
      { answerText: '41', isCorrect: true },
      { answerText: '42', isCorrect: false },
      { answerText: '43', isCorrect: false }
    ],
  },
  {
    questionText: 'Dado el punto P1(3,4), determine el número de los puntos que se generan por simetría, si se toman como ejes de simetría, los ejes coordenados y la recta y=x.', answerOptions: [
      { answerText: '2', isCorrect: false },
      { answerText: '8', isCorrect: true },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '10', isCorrect: false }
    ],
  },
  {
    questionText: 'Si el número de lados de un polígono convexodisminuye en dos, el número de diagonales disminuye en quince. Calcule la suma de las medidas de los ángulos internos del polígono inicial en grados sexagesimales.',
    answerOptions: [
      { answerText: '1440', isCorrect: true },
      { answerText: '1620', isCorrect: false },
      { answerText: '1800', isCorrect: false },
      { answerText: '1980', isCorrect: false },
      { answerText: '2160', isCorrect: false }
    ],
  },
  {
    questionText: 'En una urna se tienen fichas idénticas y en cada una de ellas está escrito un número de 3 cifras del sistema de base 3. La urna contiene a todos los números de 3 cifras del sistema ternario, sea ∈: el experimento aleatorio que consiste en extraer aleatoriamente una ficha de urna y X: la variable aleatoria discreta asociada definida como la suma de cifras del número seleccionado. Halle la esperanza matemática de la variable aleatoria X.',
    answerOptions: [
      { answerText: '3.2', isCorrect: false },
      { answerText: '3.3', isCorrect: false },
      { answerText: '3.4', isCorrect: false },
      { answerText: '3.5', isCorrect: true },
      { answerText: '3.6', isCorrect: false }
    ],
  },
];
//================= PREGUNTAS PRUEBA 2 ======================

const preguntasP2 = [
  {
    questionText: 'El volumen de un planeta A es 8 veces el volumen de la Tierra. Encuentre la aceleración de la gravedad en la superficie del planeta A, si su masa es 3 veces la masa de la Tierra (g es la gravedad en la superficie de la Tierra).',
    answerOptions: [
      { answerText: '2g/9', isCorrect: false },
      { answerText: '3g/8', isCorrect: false },
      { answerText: '3g/4', isCorrect: true },
      { answerText: '7g/9', isCorrect: false },
      { answerText: 'g/4', isCorrect: false }
    ],
  },
  {
    questionText: 'Un objeto oscila con una frecuencia angular de 4rad/s. En t=0s, se encuentra a 4 cm de su posición de equilibrio con una rapidez de 12 cm/s. Calcule en cm, la amplitud de la oscilación.',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '5', isCorrect: true },
      { answerText: '2', isCorrect: false },
      { answerText: '3', isCorrect: false },
      { answerText: '4', isCorrect: false }
    ],
  },
  {
    questionText: 'Dada la ecuación dimensionalmente correcta E = xFv, determine la dimensión de x si E es energía, F es fuerza y v es velocidad.',
    answerOptions: [
      { answerText: 'T', isCorrect: true },
      { answerText: 'M', isCorrect: false },
      { answerText: 'L', isCorrect: false },
      { answerText: 'ML', isCorrect: false },
      { answerText: 'LT', isCorrect: false }
    ],
  },
  {
    questionText: 'Sobre una recta se colocan consecutivamente 10 partículas puntuales e idénticas, separadas a una distancia de 1 m una de la otra. Sobre la recta se acerca otra partícula idéntica a las anteriores con una rapidez de 10 m/s. Calcule el tiempo que transcurre desde que se produce el primer choque hasta el último si todos los choques son completamente inelásticos.',
    answerOptions: [
      { answerText: '5', isCorrect: false },
      { answerText: '5.1', isCorrect: false },
      { answerText: '5.2', isCorrect: false },
      { answerText: '5.4', isCorrect: true },
      { answerText: '5.3', isCorrect: false }
    ],
  },
];
//================= PREGUNTAS PRUEBA 3 ======================

const preguntasP3 = [
  {
    questionText: 'Si x e y son números enteros mayores que 150 tal que x + y = 500, ¿cuál de las alternativas propuestas podría ser la razón de x con respecto a y?',
    answerOptions: [
      { answerText: '3 a 1', isCorrect: false },
      { answerText: '4 a 1', isCorrect: false },
      { answerText: '3 a 2', isCorrect: true },
      { answerText: '7 a 3', isCorrect: false },
      { answerText: '5 a 2', isCorrect: false }
    ],
  },
  {
    questionText: 'Por tres camisetas y dos pares de zapatos se paga 311 soles. El capicúa obtenida de los dígitos de este monto es la suma entre los precios de los dos productos. El precio de cada camiseta y cada par de zapatos son respectivamente:',
    answerOptions: [
      { answerText: 'S/17 y S/130', isCorrect: false },
      { answerText: 'S/49 y S/82', isCorrect: true },
      { answerText: 'S/46 y S/85', isCorrect: false },
      { answerText: 'S/68 y S/63', isCorrect: false },
      { answerText: 'S/82 y S/49', isCorrect: false }
    ],
  },
  {
    questionText: 'En una caja hay 18 balsas de avena, 17 bolsas de azúcar, 10 balsas de leche y 26 bolsas de arroz, Indique el mínima número de bolsas que se deben sacar para tener la seguridad de haber extraído un producto par completo.',
    answerOptions: [
      { answerText: '68', isCorrect: true },
      { answerText: '55', isCorrect: false },
      { answerText: '63', isCorrect: false },
      { answerText: '70', isCorrect: false },
      { answerText: '71', isCorrect: false }
    ],
  },
  {
    questionText: 'Kant sostiene que solo conocemos los efectos que producen las cosas en nuestros sentidos; en consecuencia, solo conocemos:',
    answerOptions: [
      { answerText: 'las cosas en sí mismas', isCorrect: false },
      { answerText: 'las esencias de los fenómenos', isCorrect: false },
      { answerText: 'la experiencia de los sentidos', isCorrect: false },
      { answerText: 'las apariencias de las cosas', isCorrect: true },
      { answerText: 'la realidad de los sentidos', isCorrect: false }
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

var rptasP1= new Array(preguntasP1.length).fill(-1);
var rptasP2= new Array(preguntasP2.length).fill(-1);
var rptasP3= new Array(preguntasP3.length).fill(-1);
//var arrMarked= rptasP1;


class Quizz extends Component {
  constructor(props) {
    super(props);
    //this.currentPart=preguntasP1;
    this.state={
      currentQuestion: 0,
      setCurrentQuestion: 0,
      showScore: false,
      score: 0,
      totalScore: [0, 0, 0],
      //Mostrar sección de exámen
      showP1: true,
      showP1: false,
      showP1: false,
      disabBot: [false, true, true],
      finished: [false, false, false],
      currentId: 1 ,
      currentPart: preguntasP1,
      marked: 0,
      totalMarked: [0, 0, 0],
      arrMarked: rptasP1
    }

    this.nextQuestion=(skipped, idClave)=>{
      if(!skipped){
        this.state.arrMarked[this.state.currentQuestion]=idClave ;
        this.setState({ marked: this.state.marked+1});
        //setTimeout(function(){ console.log(this.state.marked)}, 500);
        
      }
      
      //alert('holaa:'+this.state.arrMarked); 
      //setTimeout(function(){ console.log(this.state.totalMarked[0])}, 500);
      if (this.state.currentQuestion+1 < this.state.currentPart.length) {
        this.setState({ currentQuestion: this.state.currentQuestion + 1 });
        
      } else {
        var disabBots=[true, true, true];
        disabBots[this.state.currentId]=false;
        this.setState({showScore: true, disabBot: disabBots});
        this.state.totalMarked[this.state.currentId-1]= this.state.marked;
        this.state.totalScore[this.state.currentId-1]= this.state.score;
        this.state.finished[this.state.currentId-1]=true;
        
        
      }
      
    };

    this.beforeQuestion=()=>{

        //this.state.arrMarked[this.state.currentQuestion]= true;
        //this.setState({ marked: this.state.marked+1});
      
      //alert('holaa:'+this.state.arrMarked);  
      if (this.state.currentQuestion+1 > 1) {
        this.setState({ currentQuestion: this.state.currentQuestion - 1 });
        //this.setState({ score: this.state.score -1});
        //this.setState({ marked: this.state.marked-1});
      }
    };

    this.paintButton=()=>{
      
    }

    this.resetPart=()=>{
      this.setState({
        currentQuestion: 0,
        setCurrentQuestion: 0,
        showScore: false,
        score: 0,
        marked:0,
        currentId: this.state.currentId + 1
      });
    }

    this.countScore=(answCorrect, indexClave)=>{
        if(this.state.arrMarked[indexClave]==-1){
          if(answCorrect) this.setState({ score: this.state.score +1});
        }else{
          this.setState({ score: this.state.score -1});
          if(answCorrect) this.setState({ score: this.state.score +1});
        }
    };
  }

  render(){
  return (

    
    <div className="wrapper-quizz">
    <div className="container">
      <div className="row">
      {/* =======================TABLAS DE RESULTADOS ============== */}  
        {this.state.finished[0]?<div className='col-md-12 text-left'>
          <h5 className='text-center'>PRIMERA PRUEBA</h5>
          <table className="table my-4">
             <tr>
              <td><h6>NOMBRE</h6></td>
              <td><h6><FaCheckSquare/> RESPONDIDAS</h6></td>
              <td><h6><FaCheck/> CORRECTAS</h6></td>
              <td><h6><FaList/> PUNTAJE</h6></td>
            </tr>
            <tr>
              <td><h6>TOTAL</h6></td>
              <td><h6>{this.state.totalMarked[0]}/{preguntasP1.length}</h6></td>
              <td><h6>{this.state.totalScore[0]}/{this.state.totalMarked[0]}</h6></td>
              <td><h6>{this.state.totalScore[0]*5 - 0.5*(this.state.totalMarked[0]-this.state.totalScore[0])}</h6></td>
            </tr>
          </table>
        </div>: null}

        {this.state.finished[1]?<div className='col-md-12 text-left'>
          <h5 className='text-center'>SEGUNDA PRUEBA</h5>
          <table className="table my-4">
          <tr>
              <td><h6>NOMBRE</h6></td>
              <td><h6><FaCheckSquare/> RESPONDIDAS</h6></td>
              <td><h6><FaCheck/> CORRECTAS</h6></td>
              <td><h6><FaList/> PUNTAJE</h6></td>
            </tr>
            <tr>
              <td><h6>TOTAL</h6></td>
              <td><h6>{this.state.totalMarked[1]}/{preguntasP2.length}</h6></td>
              <td><h6>{this.state.totalScore[1]}/{this.state.totalMarked[1]}</h6></td>
              <td><h6>{this.state.totalScore[1]*5 - 0.5*(this.state.totalMarked[1]-this.state.totalScore[1])}</h6></td>
            </tr>
          </table>
        </div>:null}

        {this.state.finished[2]?<div className='col-md-12 text-left'>
          <h5 className='text-center'>TERCERA PRUEBA</h5>
          <table className="table my-4">
          <tr>
              <td><h6>NOMBRE</h6></td>
              <td><h6><FaCheckSquare/> RESPONDIDAS</h6></td>
              <td><h6><FaCheck/> CORRECTAS</h6></td>
              <td><h6><FaList/> PUNTAJE</h6></td>
            </tr>
            <tr>
              <td><h6>TOTAL</h6></td>
              <td><h6>{this.state.totalMarked[2]}/{preguntasP3.length}</h6></td>
              <td><h6>{this.state.totalScore[2]}/{this.state.totalMarked[2]}</h6></td>
              <td><h6>{this.state.totalScore[2]*5 - 0.5*(this.state.totalMarked[2]-this.state.totalScore[2])}</h6></td>
            </tr>
          </table>
        </div>:null}

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
            //currentPart: preguntasP1
          })}}
          type="button" class="btn btn-primary mx-2">
            PRUEBA 1 <span class="badge badge-light active">{preguntasP1.length}</span>
          </button>  
        </div>

        <div className='col-md-4'>
          <button
          disabled={this.state.disabBot[1]} 
          onClick={() => {this.setState({
            currentPart: preguntasP2,
            arrMarked: rptasP2,
          }); this.resetPart();}}
          type="button" class="btn btn-primary mx-2">
            PRUEBA 2 <span class="badge badge-light active">{preguntasP2.length}</span>
          </button>  
        </div>

        <div className='col-md-4'>
          <button
          disabled={this.state.disabBot[2]}
          onClick={() => {this.setState({
            currentPart: preguntasP3,
            arrMarked: rptasP3
          }); this.resetPart()}}
          type="button" class="btn btn-primary mx-2">
            PRUEBA 3 <span class="badge badge-light active">{preguntasP3.length}</span>
          </button>  
        </div>
        {/* ======================MOSTRAR LAS PARTES DEL EXAMEN ===================== */}
        {//Mostrar prueba 1
        !this.state.showP1? null: 
        <div className='col-md-12'>
          {//Contenido de la Prueba 1
          this.state.showScore ? (
			    <div className='row score-section'>
            <div className='col-md-12 text-center'><h4>HAS TERMINADO LA PARTE {this.state.currentId}</h4></div>
          </div>
			    ) : (
				  <div className='row'>
						<div className='question-count col-md-12'>
							<span>{this.state.currentQuestion+1}</span>/{this.state.currentPart.length}
						</div>
						<div className='col-md-12 question-text text-left'>
              {/* Muestra el texto de la pregunta */}
              {this.state.currentPart[this.state.currentQuestion].questionText}
            </div>
					  <div className='col-md-12 row'>
            {this.state.currentPart[this.state.currentQuestion].answerOptions.map((answerOption, index) => (
            /* Muestra las 5 opciones de las preguntas */
              <div className='col-md-4'>
                <button className={this.state.arrMarked[this.state.currentQuestion]==index? 'btn-outline-dark btn my-2 w-50': 'btn-dark btn my-2 w-50'} onClick={()=>{
                  this.countScore(answerOption.isCorrect, index); 
                  this.nextQuestion(false, index);}}>
                {answerOption.answerText}
                </button>
              </div>
            ))}
					  </div>
            <div className='col-md-6 text-left my-4'>
            <button className='btn btn-outline-success my-2 w-20' onClick={()=>{
              this.beforeQuestion(true);}}>
              <FaArrowLeft/> Regresar 
            </button>  
            </div>  
            <div className='col-md-6 text-right my-4'>
            <button className='btn btn-outline-success my-2 w-20' onClick={()=>{
              this.nextQuestion(true, -1);}}>
              Saltar <FaArrowRight/> 
            </button>
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

