import React, {Component} from 'react';

import { Redirect } from 'react-router'

import StatusPage from '../StatusPage/StatusPage';

const axios = require('axios').default;

class Registro extends Component {
  
  constructor() {
    super();
    this.state = {
      username:'',
      nombres:'',
      apellidos:'',
      correo:'',
      contraseña:'',
      statuspage: ''
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


    axios({
        method: "post",
        url: "http://localhost:3001/api/auth/signup",
        data: {
          username: this.state.username,
          nombres: this.state.nombres,
          apellidos: this.state.apellidos,
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
            //console.log("token: ", response.data.token)
            //window.localStorage.setItem("token", response.data.token);
            //this.obtenerDatosDelUsuario()
            /*
            <Redirect
              to={{
              pathname: "status",
              state: { status: "registred" }
               }}
            />*/
            this.setState({ statuspage: response.status, statusMessage: response.statusText})
            console.log("statuspage: ", response)
          }
        })
        .catch((e) => {
          //handle error
          if (e.response) {
            console.log("response: ", e.response);
            this.setState({ statuspage: e.response.status, statusMessage: e.response.data.message})
            console.log("statuspage: ", e.response.status)
          }
      });

     
  }
  render(){
  if (this.state.statuspage == 200 ) return <StatusPage status = {this.state.statuspage} message = {this.state.statusMessage} />
  if (this.state.statuspage == 400 ) return  <StatusPage status = {this.state.statuspage} message = {this.state.statusMessage} />  

    return (
    <div className="container">


      <div className="row">
        <div className="col-md-12 my-3"><h2 className="titulo">Registrarse</h2></div>
        <div className="col-md-12 my-3">Username</div>
      </div>

      <div className="row form-group">

        <div className="col-md-4">
        </div>

        <div className="col-md-4">
        <input name="username" onChange={this.handleChange} value={this.state.username} className="form-control " placeholder="El juan" size="15" type="text" />
        </div>

        <div className="col-md-4">
        </div>
      </div>









      <div className="row">
        <div className="col-md-12 my-3">Nombres</div>
      </div>

      <div className="row form-group">

        <div className="col-md-4">
        </div>

        <div className="col-md-4">
        <input name="nombres" onChange={this.handleChange} value={this.state.nombres} className="form-control " placeholder="Jaun Carlos" size="15" type="text" />
        </div>

        <div className="col-md-4">
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 my-3">Apellidos</div>
      </div>

      <div className="row form-group">

        <div className="col-md-4">
        </div>

        <div className="col-md-4">
        <input name="apellidos" onChange={this.handleChange} value={this.state.apellidos} className="form-control " placeholder="Alvarez Contreras" size="15" type="text" />
        </div>

        <div className="col-md-4">
        </div>
      </div>

      

      
      <div className="row">
        <div className="col-md-12 my-3">Correo</div>
      </div>

      <div className="row form-group">

        <div className="col-md-4">
        </div>

        <div className="col-md-4">
        <input name="correo" onChange={this.handleChange} value={this.state.correo} className="form-control " placeholder="example@gmail.com" size="15" type="text" />
        </div>

        <div className="col-md-4">
        </div>
      </div>


      <div className="row">
        <div className="col-md-12 my-3">Contraseña</div>
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
          <button className="btn btn-primary w-40 " onClick={this.pedirTask} >Registrarse</button>
        </div>
      </div>

    </div>     
  
  )};
}

export default Registro;
