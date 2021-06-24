
import React, {Component} from 'react';


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
      firstname: "",
      //lastname: "",
      items: []
    };
  }

  handleChange(event) {
    if (event.target.name === "firstname") {
      this.setState({ firstname: event.target.value });
    } else if (event.target.name === "lastname") {
      this.setState({ lastname: event.target.value });
    }
  }

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



  render(){
  return (

    <div style={this.estilos} className = "container homepage page">

      {/*//////////////////////////////////////////////////////////////
      <div>First Name</div>
        <input
          name="firstname"
          value={this.state.firstname}
          onChange={this.handleChange.bind(this)} />
        <div>Last Name</div>
        <input
          name="lastname"
          value={this.state.lastname}
          onChange={this.handleChange.bind(this)} />
        <button onClick={() => this.addItem()}>Submit</button>
        <PostList
          postList={this.state.items}
          removeItem={this.removeItem.bind(this)} 
        />
      //////////////////////////////////////////////////////////////*/}


    {/*<form>*/}
      <div className="row">
        <div className="col-md-12 my-3"><hr/><h2>SUBIR PROBLEMA</h2><hr/></div>
        <div className="col-md-4"><h5> Archivo de imágen</h5>
          <input className="my-3" type='file'/>
          <p>*Asegurese que el archivo tenga formato de imágen (png, jpg, jpeg) antes de cargarlo.
              No se aceptan archivos con otro tipo de formato*</p>
          <button class="btn btn-danger">Detectar Texto</button>
        </div>
        <hr/>
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
        <div className="col-md-12 my-3"><h4>Detalles </h4></div>
        <div className="col-md-4 my-3">
          <h5>Curso</h5>
          <select className="form-control">
            <option value="grapefruit">Aritmética</option>
            <option value="lime">Álgebra</option>
            <option selected value="coconut">Geometría</option>
            <option value="mango">Trigonometría</option>
            <option value="mango">RM</option>
            <option value="mango">Física</option>
            <option value="mango">Química</option>
            <option value="mango">Letras</option>
            <option value="mango">Otros</option>
          </select>
        </div>
        <div className="col-md-4 my-3">
          <h5>Tema</h5>
          <select className="form-control">
            <option value="grapefruit"></option>
            <option value="lime">Movimiento</option>
            <option value="lime">Mecánica</option>
            <option selected value="coconut">Fluidos</option>
            <option value="mango">Electricidad</option>
            <option value="mango">Magnetismo</option>
            <option value="mango">Gravitación</option>
          </select>
        </div>
        <div className="col-md-4 my-3">
          <h5>Subtema</h5>
          <select className="form-control">
            <option value="grapefruit">Vectores</option>
            <option value="lime">MRU</option>
            <option selected value="coconut">MRUV</option>
            <option value="mango">Caida Libre</option>
            <option value="mango">Movimiento Parabólico</option>
          </select>
        </div>
        <div className="col-md-4 my-3">
          <h5>Universidad</h5>
          <select className="form-control">
            <option value="grapefruit">UNI</option>
            <option value="lime">UNMSM</option>
            <option selected value="coconut">UNFV</option>
            <option value="mango">UNLM</option>
            <option value="mango">UNC</option>
            <option value="mango">OTRAS</option>
          </select>
        </div>
        <div className="col-md-4 my-3">
          <h5>Año</h5>
          <input className="form-control" type="number" placeholder="2020"></input>
        </div>
        <div className="col-md-4 my-3">
          <h5>Ciclo</h5>
          <select className="form-control">
            <option value="grapefruit">I</option>
            <option value="lime">II</option>
            <option selected value="coconut">OTRO</option>
          </select>
        </div>
        <div className="col-md-12 my-3"><h3>Filtros</h3></div>
        <div className="col-md-8 my-3">
          <h5>Descripción</h5>
          <textarea className=" form-control"></textarea>
        </div>
        <div className="col-md-4">
          <div className="col-md-12 my-3"><h5>Palabras clave</h5></div>
          <input
          className="form-control my-2"
          name="firstname"
          value={this.state.firstname}
          onChange={this.handleChange.bind(this)} 
          />
        {/*<div>Last Name</div>
        <input
          name="lastname"
          value={this.state.lastname}
          onChange={this.handleChange.bind(this)} 
        />*/}
        <button  
          className="btn btn-primary w-100"
          onClick={() => this.addItem()}>Agregar
        
        </button>
        <PostList
          postList={this.state.items}
          removeItem={this.removeItem.bind(this)} 
        />
        </div>
      </div>
      <row>
        <hr/>
        <div className="col-md-12"><input className="btn w-50 btn-primary btn-lg my-3" type="Submit"></input></div>
      </row>
    {/*</form>*/}
    </div>
  )};
}

export default UploadPage;
