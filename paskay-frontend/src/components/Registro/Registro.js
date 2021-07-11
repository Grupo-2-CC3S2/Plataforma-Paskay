import React, {Component} from 'react';

class Registro extends Component {
  
  constructor() {
    super();
    this.state = {
      nombres:'',
      apellidos:'',
      correo:'',
      contraseña:''
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
    if (this.state.buscador === "") return
    //fetch('http://localhost:3001/search?search_query=' + this.state.buscador)
    fetch(`http://localhost:3001/search?search_query=${this.state.buscador}&curso=${this.state.curso}&tema=${this.state.tema}&universidad=${this.state.universidad}&anio=${this.state.año}`)
    .then(res=> res.json()) // Convierte el resultado en json
    .then(data => console.log(data))// Imprime el resultado en consola
    .catch(err => console.log(err)); 
  }
  render(){
  return (
    <div className="container">

      <div className="row">
        <div className="col-md-12 my-3"><h2 className="titulo">Registrarse</h2></div>
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