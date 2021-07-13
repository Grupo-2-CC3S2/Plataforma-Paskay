import React, {Component} from 'react';
import Perfil from '../Perfil/Perfil';
import './../commonStyles.css'
import {
  NavLink,
} from "react-router-dom";


const axios = require('axios').default;

class IniciarSesion extends Component {
  
  constructor() {
    super();
    this.state = {
      correo:'pablo@jsak',
      contraseña:'jajaja'
    };
  }


  handleChange = (e) => {
    //console.log(e.target.name, e.target.value)
    //console.log(e.target.value)
    console.log(this.state);   
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  
  closeSesion = () => {

    window.localStorage.setItem("token", "");
  }


  pedirTask = (e) => {
    e.preventDefault();
    console.log(this.state);   
    //fetch('http://localhost:3001/search?search_query=' + this.state.buscador)

    axios({
        method: "post",
        url: "http://localhost:3001/api/auth/signin",
        data: {
          email: this.state.correo,
          password: this.state.contraseña
        },
        headers: { "Content-Type": "application/json", 'Authorization': 'ayJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZWI4NjExZmYzMTQ1NzVjNzZkOTg2NSIsImlhdCI6MTYyNjE0ODkzNywiZXhwIjoxNjI2MjM1MzM3fQ.YvHD8LJlcmADp-MWuGfTIcaAk8ak73G6qZgX-6Fpa30'},
        //headers: { "Content-Type": "multipart/form-data", 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZWI4NjExZmYzMTQ1NzVjNzZkOTg2NSIsImlhdCI6MTYyNjE0ODkzNywiZXhwIjoxNjI2MjM1MzM3fQ.YvHD8LJlcmADp-MWuGfTIcaAk8ak73G6qZgX-6Fpa30'},
        //x-access-token
        //headers: { "Content-Type": "application/json"},
      })
        .then((response) => {
          //handle success
          console.log(response);
          if (response.data) {
            console.log("token: ", response.data.token)
            window.localStorage.setItem("token", response.data.token);
          }
        })
        .catch((e) => {
          //handle error
          if (e.response) {
            console.log("response: ", e.response.data.message);
          }
      });


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
        <div className="col-md-12 my-3">Ingrese contraseña</div>
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
        <div className="col-md-12"> 
          <button className="btn btn-primary w-40 " onClick={this.closeSesion} >Cerrar Sesion</button>
        </div>
      </div>

      
      <div className="row">
        <div className="col-md-12 my-3">¿ No tienes cuenta ?</div>
      </div>

      <div className="row my-3">
        <div className="col-md-12"> 
    {/* <button className="btn btn-primary w-40 ">Registrarse</button>*/}
          <NavLink exact= "true"  to="/signup">Registrase</NavLink>
        </div>
      </div>
      <div className="row">
      <Perfil></Perfil>
      </div>

    </div>

  
  )};
}

export default IniciarSesion;

