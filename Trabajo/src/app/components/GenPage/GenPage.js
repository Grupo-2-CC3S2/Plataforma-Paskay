
import React, {Component} from 'react';

class GenPage extends Component {
  
  render(){
  return (
    <div className = "container homepage page">
      <div className="row my-2">
        <div className="col-md-12 my-4"><h3>GENERADOR DE EXÁMENES</h3><hr/></div>
      </div>
      <div className="row">
      <div className="col-md-3">
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
        </div>
      </div>
      
      <div className="col-md-8">
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
            <button className="btn btn-warning btn-lg">EMPEZAR</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )};
}

export default GenPage;
