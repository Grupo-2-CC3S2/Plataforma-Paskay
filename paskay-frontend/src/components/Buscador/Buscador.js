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
      checked: false,
      text:''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked,
    })
  }

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
          <select className="form-control">
              <option value="grapefruit">Aritmética</option>
              <option value="lime">Álgebra</option>
              <option selected value="coconut">Geometría</option>
              <option value="mango">Trigonometría</option>
              <option value="mango">RM</option>
              <option value="mango">Física</option>
              <option value="mango">Química</option>
              <option value="mango">Letras</option>
              <option value="mango">Otros</option>
            </select>
          </div>
          <div className="col-md-3">
          <select className="form-control">
              <option value="grapefruit">Proporciones</option>
              <option value="lime">Vectores</option>
              <option selected value="coconut">Productos notables</option>
              <option value="mango">Regla de tres simple</option>
              <option value="mango">Logica</option>
              <option value="mango">Ecuaciones</option>
              <option value="mango">Inecuaciones</option>
              <option value="mango">Valor Absoluto</option>
              <option value="mango">Otros</option>
            </select>
          </div>
          <div className="col-md-3">
          <select className="form-control">
              <option value="grapefruit">universidad Nacional de San Marcos</option>
              <option value="lime">Universidad del Callao</option>
              <option selected value="coconut">Universidad Nacional de Ingenieria</option>
            </select>
          </div>
          <div className="col-md-3">        
            <select className="form-control">
              <option value="grapefruit">2021-1</option>
              <option value="lime">2020-2</option>
              <option selected value="coconut">2020-1</option>
              <option value="mango">2019-2</option>
              <option value="mango">2019-1</option>
              <option value="mango">2018-2</option>
              <option value="mango">2018-1</option>
              <option value="mango">2017-2</option>
              <option value="mango">Otros</option>
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
          <input  className="form-control " placeholder="Escribe tu pregunta" 
          size="15" type="text" /*value={this.state.value} onChange={this.handleChange}*/ />
        </div>
        <div className="col-md-2"> 
          <button className="btn btn-primary w-100 " value="Submit">Buscar</button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4"><input type="checkbox" 
        checked={ this.state.checked } 
        onChange={ this.handleChange }
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

