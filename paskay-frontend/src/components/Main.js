import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Home from './Home';
import About from './About';

class MainPage extends Component {
  constructor(props){
      super(props)
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
    const HomePage = () => {
          return(
              <Home 
                  preguntas = {this.preguntas}
              />
          );
        }
  return (


    <div>
    
  <Router>
        <div>
            <nav>
                <ul>
                  <li>
                    <Link  exact= "true" onClick = {this.handleClick} to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link onClick = {this.handleClick} to="/about">Nosotros</Link>
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
