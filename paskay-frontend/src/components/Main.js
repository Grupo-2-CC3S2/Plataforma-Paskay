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
  render(){
  return (
    <div>
    
  <Router>
        <div>
            <nav>
                <ul>
                  <li>
                    <Link  exact= {true} onClick = {this.handleClick} to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link onClick = {this.handleClick} to="/about">Nosotros</Link>
                  </li>
               </ul>
              </nav>
          </div>
        <Switch>
          <Route path="/about" component = {About}></Route>
          <Route path="/" component = {Home}></Route>
        </Switch>
    </Router>
    </div>
  )};
}

export default MainPage;
