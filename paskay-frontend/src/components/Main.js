import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import HomePage from './HomePage';
import About from './About';
import UploadPage from './UploadPage';
import GenPage from './GenPage';

import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MainPage extends Component {
  constructor(props){
      super(props)
      this.state = {pages:["SearchPage","UploadPage","GenPage"],actPage:"HomePage"}
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
    
  render(){

    this.cas = ()=>{
    if(this.state.pages[0]=="HomePage"){
      return (
        <FontAwesomeIcon icon={faHome} />)}
    if(this.state.pages[0] == "Buscar"){
      return(
        <FontAwesomeIcon icon={faSearch} />
      )
    }
    }


    this.handleClick = (n) =>{
      if(this.state.actPage != this.state.pages[n]){
        this.setState({actPage: this.state.pages[n]})
      }else{
            this.setState({actPage: "HomePage"})
      }
    }
    const BuildHomePage = () => {
          return(
              <HomePage 
                  preguntas = {this.preguntas}
              />
          );
        }
  return (


    <div className = "contenedor">
    
  <Router>
      <header>
        <div><h1>PLATAFORMA PASKAY</h1></div>
        <div><button>Iniciar sesion</button></div>
      </header>
        <div>
            <nav className = "marco-izq">
                <ul>
                  <li>
                    {(() =>{
                        if(this.state.actPage != this.state.pages[0]){
                          return (
                            <Link  exact= "true" onClick = {() => this.handleClick(0)} to="/about"><FontAwesomeIcon icon={faSearch} size = "4x"/></Link>
                            )}else{
                          return(
                            <Link  exact= "true" onClick = {() => this.handleClick(0)} to="/"> <FontAwesomeIcon icon={faHome} size = "4x"/></Link>
                          )}
                      
                    })()}
                  </li>
                  <li>
                    {(() =>{
                        if(this.state.actPage != this.state.pages[1]){
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
                        if(this.state.actPage != this.state.pages[2]){
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
          <Route path="/upload" component = {UploadPage}></Route>
          <Route path="/about" component = {About}></Route>
          <Route path="/" component = {BuildHomePage}></Route>
        </Switch>
    </Router>
    </div>
  )};
}

export default MainPage;
