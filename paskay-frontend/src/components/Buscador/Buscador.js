
import React, {Component} from 'react';
import { useState } from 'react';
import './Buscador.css';
import Resultados from './Resultados/Resultados';
import Pregunta from './Pregunta/Pregunta';
import { CURSOS } from "../../resources/cursos"
import { UNIVERSIDADES } from "../../resources/universidades"
import { ANIOS } from "../../resources/anios"
import Solucion from '../Solucion/Solucion';
import {FaEdit, FaFilter, FaSearch} from "react-icons/fa"

//import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
//import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";

// ========== Variables de prueba ===========
import { testPregunta1 } from '../../resources/testVariables';
import logoPaskay from './../../imagenes/paskay_log.png';
// ========== Variables de prueba ===========


// ===========================Mostrar SOLUCION ====================
const BuscarPregunta = () => {
  const [show, toggleShow] = React.useState(true);

  return (
    <div>
      <button
        className="btn btn-primary w-50"
        onClick={() => toggleShow(!show)}
      >
        {show ? 'Ocultar Solución' : 'Mostrar Solución'}
      </button>    
      {show && <div><Pregunta/></div>}
    </div>
  )
}
// ===========================Fin Mostrar Pregunta ====================
class Buscador extends Component { 
constructor() {

    super();
    this.state = {
      buscador: '',
      curso:'all',
      tema:'all',
      universidad:'all',
      año:'all',
      resultados:[],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.pedirTask.bind(this);
  }

  handleCheck = () => {
    this.setState({
      checked: !this.state.checked,
    })
  }

  handleChange(e) {
    //console.log(e.target.name, e.target.value)
    //console.log(e.target.value)
    console.log(this.state);   
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  renderTemas = () => {
    for(let i in CURSOS){
      if(CURSOS[i].nombre == this.state.curso){
          return CURSOS[i].temas.map((tema) => {
            return <option value = {tema}>{tema}</option>
           })
      }
    }
    return <div></div>
    
  }


  pedirTask = (e) => {
    e.preventDefault();
    console.log(this.state);   
    if (this.state.buscador === "") return
    //fetch('http://localhost:3001/search?search_query=' + this.state.buscador)
    fetch(`http://localhost:3001/api/search?search_query=${this.state.buscador}&curso=${this.state.curso}&tema=${this.state.tema}&universidad=${this.state.universidad}&anio=${this.state.año}`)
    .then(res=> res.json()) // Convierte el resultado en json
    .then(data => this.setState({"resultados": data}))// Imprime el resultado en consola
    .catch(err => console.log(err)); 
 

    /*
    fetch('/',{//Especificar a la ruta a donde se va enviar
      method: 'GET',
      body: JSON.stringify(this.state), //Convertir un objeto a string
      headers:{
        'Accept': 'aplication/json',
        'Content-Type': 'aplication/json'
      }
    }).then(res=>console.log(res)) //Si en caso recibio algo debe dar respuesta
    .catch(err => console.log(err)); 
    */
  }

/*===================================*/

  
  

  /*handleChange(event) {
    this.setState({
      text:event.target.value
    })
  }*/


  idToNumber = (_id) => parseInt(_id.slice(18,24),16)
  
  render(){
   
  // ==========================BUSQUEDA AVANZADA =================================  
    const content = !this.state.checked ? null: 
    <div>
        <div className="row my-3">
        <div className="col-md-3 "><p>Curso</p></div>
        <div className="col-md-3 "><p>Tema</p></div>
        <div className="col-md-3 "><p>Universidad</p></div>
        <div className="col-md-3 "><p>Año</p></div>
      </div>


      <div className="row">
          <div className="col-md-3">
          <select name="curso" onChange={this.handleChange} value={this.state.curso} className="form-control">
              <option value = "all">Todos</option>
              {CURSOS.map((curso) => {
                return <option value = {curso.nombre}>{curso.nombre}</option>
              })}
            </select>
          </div>
          <div  className="col-md-3">
          <select name="tema"  onChange={this.handleChange} value={this.state.tema} className="form-control">
              <option value = "all">Todos</option>
              {this.renderTemas()}
            </select>
          </div>
          <div className="col-md-3">
          <select name="universidad" onChange={this.handleChange} value={this.state.universidad} className="form-control">
              <option value = "all">Todos</option>
              {UNIVERSIDADES.map((universidad) => {
                return <option value = {universidad}>{universidad}</option>
              })}
            </select>
          </div>
          <div className="col-md-3">        
            <select name="año" onChange={this.handleChange} value={this.state.año}  className="form-control">
              <option value = "all">Todos</option>
              {ANIOS.map((anio) => {
                return <option value = {anio}>{anio}</option>
              })}
            </select>
          </div>

      </div>

      </div>
    // ==========================FIN BUSQUEDA AVANZADA =================================
  return (
    // ==========================ENCABEZADO DEL BUSCADOR =================================
    <div className="container">
      <div className="row cardStyle p-4 my-4">
        <div className="col-md-12 my-3"><img src={logoPaskay} alt='logo'/></div>
        <div className="col-md-12"><h2>¡Únete a millones de usuarios en la resolución de problemas!</h2></div>    
        <div className="col-md-11"> 
          <input name="buscador" onChange={this.handleChange} value={this.state.buscador}  className="form-control " placeholder="Escribe tu pregunta" 
          size="15" type="text" /*value={this.state.value} onChange={this.handleChange}*/ />
        </div>
        <div className="col-md-1 text-left"> 
          <button className="btn btn-primary w-100 " value="Submit" onClick={this.pedirTask}><FaSearch></FaSearch></button>
        </div>

        <div className="col-md-4 text-left my-4"><input type="checkbox" 
        checked={ this.state.checked } 
        onChange={ this.handleCheck }
        className=''
        name="check" id="check" value="1"/> 
         Búsqueda avanzada
        </div> 
        <div className="col-md-12">{ content }</div>
      </div>
      {/* // ======================Fin ENCABEZADO DEL BUSCADOR =================================*/}
      <div className="row  my-4 cardStyle p-4">
        <div className="col-md-12"> 
          {/*<button className="btn btn-primary w-50 ">Buscar</button>*/}
          <h5>Resultados relacionados a {this.state.text}<hr/></h5>
        </div>
        <div className="col-md-12">
          {/* ************Plantilla para mostrar resultados de busqueda*********** 
          <Resultados id = "12" question = "esta es una pregunta"></Resultados>*/}
          {this.state.resultados.map((preg) => {
            return <Resultados pregunta = {preg} id = {parseInt(preg._id.slice(18,24),16)} question = {preg.question} opciones = {preg.opciones}></Resultados>
          })}
        </div>
      <div className="col-md-12">
        {/*<BuscarPregunta/>*/}
      {/*
     {this.state.resultados.map((preg) => {
          return <Pregunta id = {parseInt(preg._id.slice(18,24),16)} question = {preg.question} opciones = {preg.opciones}></Pregunta>
        })} */}
      </div>
      </div>

    </div>


  
  )};
}

export default Buscador;


//constructor(props){
//  super(props)
//}

//<div>
//{
//  this.props.preguntas.map((p) => {
//    return(
//      <Pregunta key = {"preg" + p.id} preg = {p}/>
//    )
//  })
//}  
//</div> 
