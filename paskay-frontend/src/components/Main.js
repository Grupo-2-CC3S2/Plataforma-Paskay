import React, {Component} from 'react';
import logo from '../logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import HomePage from './HomePage/HomePage';
import UploadPage from './UploadPage/UploadPage';
import GenPage from './GenPage/GenPage';
import IniciarSesion from './InicioSesion/InicioSesion';
import Registro from './Registro/Registro';
import Buscador from './Buscador/Buscador';
import Perfil from './Perfil/Perfil';

import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StatusPage from './StatusPage/StatusPage';

class Main extends Component {
  //Empieza constructor
  constructor(props){
      super(props)
      
      //Se borra mas adelante
      this.preguntas = 
        [
          {
            id: 4,
            universidad: "UNI",
            anio: "2014-II",
            preg: "./pr.jpg",
            sol: "./solucion.jpg",
            enunciado: "El enunciado de la pregunta es esta",
            keywords: ["UNI","Quimica","Redox"]
          },
         {
            id: 5,
            universidad: "UNFV",
            anio: "2014-II",
            preg: "./pr.jpg",
            sol: "./solucion.jpg",
            enunciado: "El enunciado de la pregunta es esta",
            keywords: ["UNFV","Aritmetica","Divisivilidad"]
          },
          {
            id: 10,
            universidad: "UNAC",
            anio: "2013-I",
            preg: "./pr.jpg",
            sol: "./solucion.jpg",
            enunciado: "El enunciado de la pregunta es esta",
            keywords: ["UNAC","Algebra","factorizacion"]
          },
          {
            id: 11,
            universidad: "UNFV",
            anio: "2010-II",
            preg: "./pr.jpg",
            sol: "./solucion.jpg",
            enunciado: "El enunciado de la pregunta es esta",
            keywords: ["UNFV","Aritmetica","Divisivilidad"]
          },
          {
            id: 12,
            universidad: "UNFV",
            anio: "2014-II",
            preg: "./pr.jpg",
            sol: "./solucion.jpg",
            enunciado: "El enunciado de la pregunta es esta",
            keywords: ["UNFV","Aritmetica","Divisivilidad"]
          }

        ];    
  }
  //Acaba constructor
    
  //Nos devuelve algo
  render(){
  


    //Enlazar un componente con una propiedad
    const BuildHomePage = () => {
      return(
              <HomePage 
                  preguntas = {this.preguntas}
              />
          );
    }

    return(
      <div className = "contenedor">      
        <Router>
            <header>
              <div><h1><img src = {logo}></img>PLATAFORMA PASKAY</h1></div>
              <NavLink activeClassName="selected-in" exact= "true"  to="/login"> <FontAwesomeIcon icon={faUser} size = "1x"/>Iniciar Sesion</NavLink>
            </header>
              <div>
                  <nav>
                      <ul>
                              <li>
                                <NavLink activeClassName="selected" exact= "true"  to="/"> <FontAwesomeIcon icon={faHome} size = "4x"/><span>Inicio</span></NavLink>
                              </li>
                              <li>
                                <NavLink activeClassName = "selected"  exact= "true" to="/upload"><FontAwesomeIcon icon={faUpload} size = "4x"/><span>Subir preg.</span></NavLink>
                              </li>
                              <li>
                                <NavLink activeClassName = "selected"  exact= "true"  to="/generador"><FontAwesomeIcon icon={faFileAlt} size = "4x"/><span>Generador</span></NavLink>
                              </li>
                      </ul>
                    </nav>
                </div>
              <Switch>
                <Route path="/signin" component = {IniciarSesion}></Route>
                <Route path="/signup" component = {Registro}></Route>
                <Route path="/registro" component = {Registro}></Route>
                <Route path="/login" component = {IniciarSesion}></Route>
                <Route path="/perfil" component = {Perfil}></Route>
                <Route path="/generador" component = {GenPage}></Route>
                <Route path="/upload" component = {UploadPage}></Route>
                <Route path="/status" render={(props) => <StatusPage {...props}/>}/>
                <Route path="/" component = {Buscador}></Route>              
              </Switch>
          </Router>
        </div>
    )
  };
}

export default Main;
