import React, {Component} from 'react';

class IniciarSesion extends Component {
  
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
        <input className="form-control " placeholder="Por ejemplo: example@gmail.com" size="15" type="text" />
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
        <input className="form-control " placeholder="Contraseña" size="15" type="text" />
        </div>

        <div className="col-md-4">
        </div>
      </div>

      <div className="row my-3">
        <div className="col-md-12"> 
          <button className="btn btn-primary w-40 ">Iniciar Sesion</button>
        </div>
      </div>

      
      <div className="row">
        <div className="col-md-12 my-3">¿ No tienes cuenta ?</div>
      </div>

      <div className="row my-3">
        <div className="col-md-12"> 
          <button className="btn btn-primary w-40 ">Registrarse</button>
        </div>
      </div>

    </div>

  
  )};
}

export default IniciarSesion;

