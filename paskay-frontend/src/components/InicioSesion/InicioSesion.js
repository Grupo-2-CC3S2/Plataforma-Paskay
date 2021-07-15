import React, {Component} from 'react';
import Perfil from '../Perfil/Perfil';
import {FaEdit, FaThumbsUp, FaThumbsDown, FaComment, FaResolving, FaPencilRuler, FaUpload, FaUser, FaKey, FaRegistered, FaJoint, FaDoorOpen} from "react-icons/fa"
import { TextField } from '@material-ui/core';
import './../../components/commonStyles.css'

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
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons';


const axios = require('axios').default;

class IniciarSesion extends Component {
  
  constructor() {
    super();
    this.state = {
      username:'',
      password:''
    };
  }

  obtenerDatosDelUsuario = () => {

    axios({
        method: "post",
        url: "http://localhost:3001/api/users/12",
        data: {},
        //headers: { "Content-Type": "multipart/form-data", 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZWI4NjExZmYzMTQ1NzVjNzZkOTg2NSIsImlhdCI6MTYyNjE0ODkzNywiZXhwIjoxNjI2MjM1MzM3fQ.YvHD8LJlcmADp-MWuGfTIcaAk8ak73G6qZgX-6Fpa30'},
        //x-access-token
        headers: { "Content-Type": "multipart/form-data", 'x-access-token': window.localStorage.getItem("token")},
      })
        .then((response) => {
          //handle success
          console.log("response",response);
          this.setState({ session: true, userData: response.data })
        })
        .catch((e) => {
          //handle error
          this.setState({ session: false })
          if (e.response) {
            if (e.response.status) 
                this.setState({ session: false })
            console.log("response: ",e.response.data.message);
          }else {

            console.log("Error: ",e);
          }
      });

   

  }


  componentDidMount(){
    this.obtenerDatosDelUsuario()
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
    this.setState({ session: false })
  }


  pedirTask = (e) => {
    e.preventDefault();
    console.log(this.state);   
    //fetch('http://localhost:3001/search?search_query=' + this.state.buscador)

    axios({
        method: "post",
        url: "http://localhost:3001/api/auth/signin",
        data: {
          username: this.state.username,
          password: this.state.password
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
            this.obtenerDatosDelUsuario()
          }
        })
        .catch((e) => {
          //handle error
          if (e.response) {
            console.log("response: ", e.response.data.message);
          }
      });


  }
  
 
  //}
  render(){

  //if (this.state.session) return <Redirect to='/perfil'/>;
  if (this.state.session) return <Perfil closeSesion = {this.closeSesion} userData = {this.state.userData} />;
  return (
    <div className="container cardStyle my-4">

      <div className="row">
        <div className="col-md-12 my-3"><h4 className="titulo">Inicio de Sesion</h4></div>
        <div className="col-md-12 my-3"><h3><FaUser/></h3></div>
      </div>

      <div className="row form-group">

        <div className="col-md-4">
        </div>

        <div className="col-md-4">
        <input name="username" onChange={this.handleChange} value={this.state.username} className="form-control " placeholder="Username" size="15" type="text" />
        </div>

        <div className="col-md-4">
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 my-3"><h3><FaKey/></h3></div>
      </div>

      <div className="row form-group">

        <div className="col-md-4">
        </div>

        <div className="col-md-4">
        <TextField name="password" onChange={this.handleChange} value={this.state.password} className="form-control " placeholder="Password" size="15" type="password" />
        </div>

        <div className="col-md-4">
        </div>
      </div>

      <div className="row my-3">
        <div className="col-6 my-2 text-right"> 
          <button className="btn btn-primary w-40 " onClick={this.pedirTask} >Iniciar Sesion</button>
        </div>
        <div className="col-6 my-2 text-left"> 
          <button className="btn btn-primary w-40 " onClick={this.closeSesion} >Cerrar Sesion</button>
        </div>
      </div>

      
      <div className="row">
        <div className="col-md-12 my-3">¿ No tienes cuenta ?</div>
      </div>

      <div className="row my-3">
        <div className="col-md-12"> 
    {/* <button className="btn btn-primary w-40 ">Registrarse</button>*/}
          <h4 className= 'btn btn-lg btn-light'><NavLink exact= "true"  to="/registro"><FaDoorOpen/> Registrase</NavLink></h4>
        </div>
      </div>
      <div className="row">
      </div>



    </div>

  
  )};
}

export default IniciarSesion;

