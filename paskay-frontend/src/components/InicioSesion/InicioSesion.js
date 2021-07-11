import React, {Component} from 'react';
import Perfil from '../Perfil/Perfil';
import './../commonStyles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Registro from '../Registro/Registro';

class IniciarSesion extends Component {
  
  constructor() {
    super();
    this.state = {
      correo:'',
      contraseña:''
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
  }
  render(){
  return (
    <div className="container">

      <div className="row">
        <div className="col-md-12 my-3"><h2 className="titulo">Inicio de Sesion</h2></div>
        <div className="col-md-12 my-3">Ingrese correo electronico</div>
      </div>

      <div className="row form-group">

        <div className="col-md-4">
        </div>

        <div className="col-md-4">
        <input name="correo" onChange={this.handleChange} value={this.state.correo} className="form-control " placeholder="Por ejemplo: example@gmail.com" size="15" type="text" />
        </div>

        <div className="col-md-4">
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 my-3">Ingrese</div>
      </div>

      <div className="row form-group">

        <div className="col-md-4">
        </div>

        <div className="col-md-4">
        <input name="contraseña" onChange={this.handleChange} value={this.state.contraseña} className="form-control " placeholder="Contraseña" size="15" type="text" />
        </div>

        <div className="col-md-4">
        </div>
      </div>

      <div className="row my-3">
        <div className="col-md-12"> 
          <button className="btn btn-primary w-40 " onClick={this.pedirTask} >Iniciar Sesion</button>
        </div>
      </div>

      
      <div className="row">
        <div className="col-md-12 my-3">¿ No tienes cuenta ?</div>
      </div>

      <Router>
              <NavLink activeClassName="selected-in" exact= "true"  to="/registro"> <FontAwesomeIcon icon={faUser} size = "1x"/>Crear usuario</NavLink>
              <Switch>
                <Route path="/registro" component = {Registro}></Route>            
              </Switch>
      </Router>
      <div className="row">
      <Perfil></Perfil>
      </div>



    </div>

  
  )};
}

export default IniciarSesion;

