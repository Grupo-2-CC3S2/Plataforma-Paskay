
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class UploadPage extends Component {
  
  estilos={
    color: 'black', 
  } 

  render(){
  return (
    <div style={this.estilos} className = "container homepage page">
    <form>
      <div className="row">
        <div className="col-md-12 my-3"><hr/><h2>SUBIR PROBLEMA</h2><hr/></div>
        <div className="col-md-6 my-3"><h4> Selecciona la imágen del problema</h4></div>
        <div className="col-md-6 my-3"><input className="form-control" type='file'/></div>
        <hr/>
        <div className="col-md-12 my-3"><h3>Detalles </h3></div>
        <div className="col-md-4 my-3"><h4>Curso</h4></div>
        <div className="col-md-4 my-3"><h4>Tema</h4></div>
        <div className="col-md-4 my-3"><h4>Subtema</h4></div>
        <div className="col-md-4 my-3">
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
        <div className="col-md-4 my-3">
        <select className="form-control">
            <option value="grapefruit"></option>
            <option value="lime">Movimiento</option>
            <option value="lime">Mecánica</option>
            <option selected value="coconut">Fluidos</option>
            <option value="mango">Electricidad</option>
            <option value="mango">Magnetismo</option>
            <option value="mango">Gravitación</option>
          </select>
        </div>
        <div className="col-md-4 my-3">
        <select className="form-control">
            <option value="grapefruit">Vectores</option>
            <option value="lime">MRU</option>
            <option selected value="coconut">MRUV</option>
            <option value="mango">Caida Libre</option>
            <option value="mango">Movimiento Parabólico</option>
          </select>
        </div>
        <div className="col-md-4 my-3"><h4>Universidad</h4></div>
        <div className="col-md-4 my-3"><h4>Año</h4></div>
        <div className="col-md-4 my-3"><h4>Ciclo</h4></div>
        <div className="col-md-4 my-3">
          <select className="form-control">
            <option value="grapefruit">UNI</option>
            <option value="lime">UNMSM</option>
            <option selected value="coconut">UNFV</option>
            <option value="mango">UNLM</option>
            <option value="mango">UNC</option>
            <option value="mango">OTRAS</option>
          </select>
        </div>
        <div className="col-md-4 my-3"><input type="number" placeholder="2020"></input></div>
        <div className="col-md-4 my-3">
          <select className="form-control">
            <option value="grapefruit">I</option>
            <option value="lime">II</option>
            <option selected value="coconut">OTRO</option>
          </select>
        </div>
        <div className="col-md-12 my-3"><h3>Filtros</h3></div>
        <div className="col-md-6 my-3">
          <h4>Descripción</h4>
          <textarea className=" form-control"></textarea>
        </div>
        <div className="col-md-6">
          <div className="col-md-12"><h4>Palabras clave</h4></div>
          <div className="col-md-12 my-2"><input className="form-control"></input></div>
          <div className="col-md-12 my-2"><input className="form-control"></input></div>
          <div className="col-md-12 my-2"><input className="form-control"></input></div>
          <div className="col-md-12 my-2"><button className="btn w-100 btn-success btn-block">Agregar</button></div>
        </div>
      </div>
      <row>
        <hr/>
        <div className="col-md-12"><input className="btn w-50 btn-primary btn-lg my-3" type="Submit"></input></div>
      </row>
    </form>
    </div>
  )};
}

export default UploadPage;
