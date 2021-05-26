import React, {Component} from 'react';
import logo from '../logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import HomePage from './HomePage/HomePage';
import UploadPage from './UploadPage/UploadPage';
import GenPage from './GenPage/GenPage';
import Buscador from './Buscador/Buscador';

import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {  CSSTransition } from 'react-transition-group';

class Main extends Component {
  //Empieza constructor
  constructor(props){
      super(props)
      this.state = {
        pages:["SearchPage","UploadPage","GenPage"],
        actPage:"HomePage",
        open0:true,
        open1:true,
        open2:true,
      }

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
          }

        ];    
  }
  //Acaba constructor
    
  //Nos devuelve algo
  render(){


    //Esto es un metodo, para cambiar el icono
    this.handleClick = (n) =>{
      if(n === 0){ this.setState({open0:!this.state.open0}); console.log(this.state.open0)}
      if(n === 1){ this.setState({open1:!this.state.open1}); console.log(this.state.open0)}
      if(n === 2){ this.setState({open2:!this.state.open2}); console.log(this.state.open0)}
      if(this.state.actPage !== this.state.pages[n]){
        this.setState({actPage: this.state.pages[n]})
      }else{
            this.setState({actPage: "HomePage"})
      }
    }


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
              <div><button>Iniciar sesion</button></div>
            </header>
              <div>
                  <nav className = "marco-izq">
                      <ul>
                         
                                   <li>
                                        {(() =>{
                                            if(this.state.actPage !== this.state.pages[0]){
                                              return (
                                                <Link  exact= "true" onClick = {() => this.handleClick(0)} to="/buscador"><FontAwesomeIcon icon={faSearch} size = "4x"/></Link>
                                                )}else{
                                              return(
                                                                                    <Link  exact= "true" onClick = {() => this.handleClick(0)} to="/"> <FontAwesomeIcon icon={faHome} size = "4x"/></Link>

                                              )}
                                          
                                        })()}
                                    </li>




                        <li>
                          {(() =>{
                              if(this.state.actPage !== this.state.pages[1]){
                                return (
                                  <Link  exact= "true" onClick = {() => this.handleClick(1)} to="/upload"><FontAwesomeIcon icon={faUpload} size = "4x"/></Link>
                                  )}else{
                                return(
                                  <Link  exact= "true" onClick = {() => this.handleClick(1)} to="/"> <FontAwesomeIcon icon={faHome} size = "4x"/></Link>
                                )}
                            
                          })()}

                        </li>

                        <li>
                          {(() =>{
                              if(this.state.actPage !== this.state.pages[2]){
                                return (
                                  <Link  exact= "true" onClick = {() => this.handleClick(2)} to="/generador"><FontAwesomeIcon icon={faFileAlt} size = "4x"/></Link>
                                  )}else{
                                return(
                                  <Link  exact= "true" onClick = {() => this.handleClick(2)} to="/"> <FontAwesomeIcon icon={faHome} size = "4x"/></Link>
                                )}
                            
                          })()}

                        </li>
                   </ul>
                    </nav>
                </div>
              <Switch>
                <Route path="/generador" component = {GenPage}></Route>
                <Route path="/buscador" component = {Buscador}></Route>
                <Route path="/upload" component = {UploadPage}></Route>
                <Route path="/" component = {BuildHomePage}></Route>
              </Switch>
          </Router>
        </div>
    )
  };
}

export default Main;
