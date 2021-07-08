
import React, {Component} from 'react';
import { useState } from 'react';
import './Buscador.css';
import Pregunta from './Pregunta/Pregunta';
//import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
//import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";

// ===========================Mostrar Pregunta ====================
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
      año:'all'
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


  pedirTask = (e) => {
    e.preventDefault();
    console.log(this.state);   
    if (this.state.buscador === "") return
    //fetch('http://localhost:3001/search?search_query=' + this.state.buscador)
    fetch(`http://localhost:3001/search?search_query=${this.state.buscador}&curso=${this.state.curso}&tema=${this.state.tema}&universidad=${this.state.universidad}&anio=${this.state.año}`)
    .then(res=> res.json()) // Convierte el resultado en json
    .then(data => console.log(data))// Imprime el resultado en consola
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
              <option value="Aritmética">Aritmética</option>
              <option value="Álgebra">Álgebra</option>
              <option selected value="Geometría">Geometría</option>
              <option value="Trigonometría">Trigonometría</option>
              <option value="RM">RM</option>
              <option value="Física">Física</option>
              <option value="Química">Química</option>
              <option value="Letras">Letras</option>
              <option value="Otros">Otros</option>
            </select>
          </div>
          <div className="col-md-3">
          <select name="tema" onChange={this.handleChange} value={this.state.tema} className="form-control">
              <option value="Proporciones">Proporciones</option>
              <option value="Vectores">Vectores</option>
              <option selected value="Productos notables">Productos notables</option>
              <option value="Regla de tres simple">Regla de tres simple</option>
              <option value="Logica">Logica</option>
              <option value="Ecuaciones">Ecuaciones</option>
              <option value="Inecuaciones">Inecuaciones</option>
              <option value="Valor Absoluto">Valor Absoluto</option>
              <option value="Otros">Otros</option>
            </select>
          </div>
          <div className="col-md-3">
          <select name="universidad" onChange={this.handleChange} value={this.state.universidad} className="form-control">
              <option value="Universidad Nacional de San Marcos">Universidad Nacional de San Marcos</option>
              <option value="Universidad del Callao">Universidad del Callao</option>
              <option selected value="Universidad Nacional de Ingenieria">Universidad Nacional de Ingenieria</option>
            </select>
          </div>
          <div className="col-md-3">        
            <select name="año" onChange={this.handleChange} value={this.state.año}  className="form-control">
              <option value="2021-1">2021-1</option>
              <option value="2020-2<">2020-2</option>
              <option selected value="2020-1">2020-1</option>
              <option value="2019-2">2019-2</option>
              <option value="2019-1">2019-1</option>
              <option value="2018-2">2018-2</option>
              <option value="2018-1">2018-1</option>
              <option value="2017-2">2017-2</option>
              <option value="Otros">Otros</option>
            </select>
          </div>

      </div>

      </div>
    // ==========================FIN BUSQUEDA AVANZADA =================================

  return (
  
      
    <div className="box container">
      <div className="row">
        <div className="col-md-12 my-3"><h1 className="titulo">PLATAFORMA PASKAY</h1></div>
        <div className="col-md-12"><h2>¡Únete a millones de usuarios en la resolución de problemas!</h2></div>    
      </div>

      <div className="row my-3">
        <div className="col-md-10"> 
          <input name="buscador" onChange={this.handleChange} value={this.state.buscador}  className="form-control " placeholder="Escribe tu pregunta" 
          size="15" type="text" /*value={this.state.value} onChange={this.handleChange}*/ />
        </div>
        <div className="col-md-2"> 
          <button className="btn btn-primary w-100 " value="Submit" onClick={this.pedirTask}>Buscar</button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4"><input type="checkbox" 
        checked={ this.state.checked } 
        onChange={ this.handleCheck }
        name="check" id="check" value="1"/> 
        Busqueda avanzada</div> 
      </div>
      <div>
        { content }
      </div>

      <div className="row my-3">
        <div className="col-md-12"> 
          {/*<button className="btn btn-primary w-50 ">Buscar</button>*/}
          <h5>Resultados relacionados a {this.state.text}</h5>
        </div>
      </div>
      <div className="row my-3">
      <div className="col-md-12">
        {/*<BuscarPregunta/>*/}
        <Pregunta></Pregunta>
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
