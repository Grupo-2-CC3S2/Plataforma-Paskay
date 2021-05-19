import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Home from './Home';
import About from './About';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MainPage extends Component {
  constructor(props){
      super(props)
      this.state = {pages:["HomePage","subir","generar"],actPage:"HomePage"}
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
      if (n != 0) return
      if(this.state.pages[0] == "HomePage"){
        this.setState({pages: ["Buscar","subir","generar"]})
      }else{
        if(this.state.pages[0] == "Buscar"){
            this.setState({pages: ["HomePage","subir","generar"]})
        }
      }
    }
    const HomePage = () => {
          return(
              <Home 
                  preguntas = {this.preguntas}
              />
          );
        }
  return (


    <div className = "contenedor">
    
  <Router>
        <div>
            <nav className = "marco-izq">
                <ul>
                  <li>
                    {(() =>{ /* ... */
                        if(this.state.pages[0]=="HomePage"){
                          return (
                            <Link  exact= "true" onClick = {() => this.handleClick(0)} to="/about"><FontAwesomeIcon icon={faSearch} /></Link>
                            )}
                        if(this.state.pages[0] == "Buscar"){
                          return(
                            <Link  exact= "true" onClick = {() => this.handleClick(0)} to="/"> <FontAwesomeIcon icon={faHome} /></Link>
                          )
                        }
                      
                    })()}
                  </li>
                  <li>
                    <Link onClick = {() => this.handleClick(1)} to="/about">{this.state.pages[1]}</Link>
                  </li>
               </ul>
              </nav>
          </div>
        <Switch>
          <Route path="/about" component = {About}></Route>
          <Route path="/" component = {HomePage}></Route>
        </Switch>
    </Router>
    </div>
  )};
}

export default MainPage;
