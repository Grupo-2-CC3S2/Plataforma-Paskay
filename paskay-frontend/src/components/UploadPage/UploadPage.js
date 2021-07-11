
import React, {Component} from 'react';
import { useState } from 'react';
import './../commonStyles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button} from 'react-bootstrap';
import { Collapse} from 'react-bootstrap';


import { CURSOS } from "../../resources/cursos"
import { UNIVERSIDADES } from "../../resources/universidades"
import { ANIOS } from "../../resources/anios"

/////////////////////////////////////////////////////////

function Example(props) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div className='row'>
      {/*////////////////// botones de opciones de problemas //////////////////*/}
      <div className='col-md-6'>
        <Button
          className={'btn-block'}
          onClick={() => {setOpen(true); setOpen2(false);}}
          aria-controls="example-collapse-text"
          //aria-expanded={open}
        >
          Problema como imágen
        </Button>
      </div>

      <div className='col-md-6'>
        <Button
          className={'btn-block'}
          onClick={() => {setOpen(false); setOpen2(true);}}
          aria-controls="example-collapse-text2"
        //aria-expanded={open2}
        >
          Problema como Texto
        </Button>
      </div>

      {/*////////////////// Contenido prob imagen //////////////////*/}
     
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className='row my-3'>
            <div className="col-md-4"><h5> Archivo de imágen</h5>
              <input className="my-3" type='file'/>
              <p>*Asegurese que el archivo tenga formato de imágen (png, jpg, jpeg) antes de cargarlo.
                No se aceptan archivos con otro tipo de formato*</p>
              <button class="btn btn-danger">Detectar Texto</button>
            </div>
            <div className="col-md-3 abs-center">
              <h5> Vista previa</h5>
              <div className="card justiy-content-around" style={{width: "12rem"}}>
                <img className="card-img-top" src={'./../../pmuestra1.png'}></img>
              </div>
            </div>
            <div className="col-md-4">
              <h5> Texto detectado</h5>
              <textarea className="form-control my-2" rows={'2'}></textarea>
              <p>*Si el texto detectado (arriba) no coincide con el de la imágen, tiene la opción a editarlo*</p>
              <button class="btn btn-success my-2">Aceptar</button>
            </div>

            <div className="col-md-12 my-3"><h3>Filtros</h3></div>
              <div className="col-md-8 my-3">
              <h5>Descripción</h5>
              <textarea className=" form-control"></textarea>
            </div>
            <div className="col-md-4">
            <div className="col-md-12 my-3"><h5>Palabras clave</h5></div>
              <button className="btn btn-primary w-100">Agregar</button>       
            </div>
            <div className="col-md-12 my-3">
              <button className="btn btn-primary btn-lg w-50">Subir</button>  
            </div>
          </div>
        </div>
      </Collapse>

      {/*////////////////// Contenido prob texto //////////////////*/}
      <Collapse in={open2}>
        <div className='row my-3'>
          <div className='col-md-8'>
            <textarea name = "texto" onChange={props.handleChange} value={props.state.texto} className="col-md 12 form-control my-2" rows={'4'}></textarea>
            <input name = "opc_a" onChange={props.handleChange} value={props.state.opc_a} className='col-md-2 mx-2' placeholder='opcion a'></input>
            <input name = "opc_b" onChange={props.handleChange} value={props.state.opc_b} className='col-md-2 mx-2' placeholder='opcion b'></input>
            <input name = "opc_c" onChange={props.handleChange} value={props.state.opc_c} className='col-md-2 mx-2' placeholder='opcion c'></input>
            <input name = "opc_d" onChange={props.handleChange} value={props.state.opc_d} className='col-md-2 mx-2' placeholder='opcion d'></input>
            <input name = "opc_e" onChange={props.handleChange} value={props.state.opc_e} className='col-md-2 mx-2' placeholder='opcion e'></input>
          </div>
          <div className='col-md-4'>
            <input  onChange={props.handleChange} className='col-md-12 my-5' type='file'/>
          </div>
          <div className="col-md-12 my-3">
            <button onClick = {props.enviar} className="btn btn-primary btn-lg w-50">Subir</button>  
          </div>
        </div>
      </Collapse>
    </div>
  );
}

//////////////////////SAMPLE//////////////////////////////

function PostButton(props){
  var style = {
      width:24,
      height:24
  }
  return (
      <button style = {style} onClick = { () => props.handleClick()}>{props.label}</button>
  )
}
function PostText(props){
  var style = {
      border:"1px solid black",
      width: props.width
  }
  return (
      <div style = {style}>{props.text}</div>
  )
}
function Post(props){
  var style = {
      display:"flex"
  }
  return (
      <div style = {style}>
          <PostButton label = "x" handleClick = {props.removeItem}/>
          <PostText text = {props.firstName} width = "200"/>
          <PostText text = {props.lastName} width = "200" />
      </div>
  )
}

function PostList(props){
  return (
      <ol>
      {
          props.postList.map((item,index) => 
              <Post key = {index} 
                    firstName = {item.firstName} 
                    //lastName = {item.lastName}
                    removeItem = {() => props.removeItem(index)}
              />
           )
       }
      </ol>
  )  
}

/////////////////////////////////////////////////////////


class UploadPage extends Component {
  
  /////////////////////////////////////////////////////////
  constructor(props) {
    super(props);
    
    this.state = {
      curso: 'all',
      tema: 'all',
      universidad: 'all',
      anio: 'all',
      texto: 'all',
      image: 'all',
      opc_a: 'all',
      opc_b: 'all',
      opc_c: 'all',
      opc_d: 'all',
      opc_e: 'all'
    };
/*
    this.state = {
      firstname: "",
      //lastname: "",
      items: []
    };
    */
  }

  /*
  handleChange(event) {
    if (event.target.name === "firstname") {
      this.setState({ firstname: event.target.value });
    } else if (event.target.name === "lastname") {
      this.setState({ lastname: event.target.value });
    }
  }
*/
  addItem() {
    this.setState({
      items: [ 
        ...this.state.items, 
        {
          firstName: this.state.firstname,
          lastName: this.state.lastname
        }
      ],
      firstname: "",
      lastname: ""
    });
  }

  removeItem(index) {
    const items = this.state.items.filter((e, idx) => idx !== index); 
    this.setState({ items });
  }
  ////////////////////////////////////////////////////////


  estilos={
    color: 'black', 
    //backgroundColor: 'rgba(100, 255, 255, .2)',
    fontStyle: 'italic'

  } 


  handleChange = (e) => {
    //console.log(e.target.name, e.target.value)
    //console.log(e.target.value)
    console.log(this.state);   
    if(e.target.files){
      this.setState({ image: e.target.files[0] })
    }else{
      const { name, value } = e.target;
      this.setState({
        [name]: value
      });
    }
  }


  enviar = () => {
    var formData = new FormData();

    formData.append("enunciado", this.state.texto);
    formData.append("anio", `${this.state.anio}-${this.state.ciclo}`);
    formData.append("universidad", this.state.universidad);
    formData.append("tema", this.state.tema);
    formData.append("opciones", `[${this.state.opc_a},${this.state.opc_b}]`);
    formData.append("curso", this.state.curso);

    // HTML file input user's choice...
    formData.append("image", this.state.image);

    // JavaScript file-like object...
    //var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
    //var blob = new Blob([content], { type: "text/xml"});

    //formData.append("webmasterfile", blob);

    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3001/problems");
    request.send(formData);
  }





  renderTemas = () => {
    for(let i in CURSOS){
      if(CURSOS[i].nombre == this.state.curso){
          return CURSOS[i].temas.map((tema) => {
            return <option value = {tema}>{tema}</option>
           })
      }
    }
    return <div></div>
    
  }

  render(){
  return (
    
    <div style={this.estilos} className = "container cardStyle my-2 p-4">
    {/*<form>*/}
    
      <div className="row ">
        <div className="col-md-12 my-3"><hr/><h2>SUBIR PROBLEMA</h2><hr/></div>
      <div className="col-md-12"><h4>Detalles </h4></div>
        <div className="col-md-4 my-3">
          <h5>Curso</h5>
          <select name="curso" onChange={this.handleChange} value={this.state.curso} className="form-control">
              {CURSOS.map((curso) => {
                return <option value = {curso.nombre}>{curso.nombre}</option>
              })}
          </select>
        </div>
        <div className="col-md-4 my-3">
          <h5>Tema</h5>
          <select name="tema" onChange={this.handleChange} value={this.state.tema} className="form-control">
              {this.renderTemas()}
          </select>
        </div>
        
        <div className="col-md-4 my-3">
          <h5>Universidad</h5>
          <select name="universidad" onChange={this.handleChange} value={this.state.universidad} className="form-control">
              {UNIVERSIDADES.map((universidad) => {
                return <option value = {universidad}>{universidad}</option>
              })}
          </select>
        </div>
        <div className="col-md-4 my-3">
          <h5>Año</h5>
          <input name = "anio" onChange={this.handleChange} value={this.state.anio} className="form-control" type="number" placeholder="2020"></input>
        </div>
        <div className="col-md-4 my-3">
          <h5>Ciclo</h5>
          <select name = "ciclo" onChange={this.handleChange} value={this.state.ciclo} className="form-control">
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="coconut">OTRO</option>
          </select>
        </div>
      </div>
      {/* ****************************************React transitions ************************************* */}
      <div className='my-4 p-4'>
        <Example enviar = {this.enviar} handleChange = {this.handleChange} state = {this.state} />
      </div>  
      
    {/*</form>*/}
    </div>
  )};
}

export default UploadPage;
