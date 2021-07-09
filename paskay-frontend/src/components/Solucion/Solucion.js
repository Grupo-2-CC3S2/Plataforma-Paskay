import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Solucion.css';

//================ Información de solucion de la bbdd ====================
import imgSol from './../../imagenes/solMuestra.png';
var idSol= '16565';
var commentSol= "Lorem Ipsum is simply dummy text of the printing and typesetting\
industry. Lorem Ipsum has been the industry's standard dummy text \
ever since the 1500s, when an ";

//================ Fin Información de solucion de la bbdd ====================

class Solucion extends Component {
  render(){
      return(
        <div className='row solContent'>
          <div className='col-md-12 my-3'>
            <h3>Solucion N° {idSol}</h3>
              <img className='col-md-8 solPict' src={imgSol}></img>
          </div>
          <div className='col-md-12 my-3'>
            <p className='solFont'>Comentario: {commentSol}</p>
          </div>
        </div>
      )}

}

export default Solucion;

/*
class Solucion extends Component{
   constructor(props){
      super(props)
     this.state = {open: 0}

      this.toggle = () =>{
        if(this.state.open) {
          this.setState({open:0})
        } else{ 
          this.setState({open:1})}
      }  
    }
    
    render(){
      if(this.state.open){

        return(

        <div className = "solucion">
          <div onClick = {this.toggle}>Mejor respuesta</div>
            <div className = "resp-p">
              <img alt = "solucion" src = {this.props.sol}></img>
          </div>
        </div>
        )
      }else return(
        <div className = "solucion">
          <div onClick = {this.toggle}>&gt;Mejor respuesta</div>
        </div>
      )
    }
   
}

class Solucion extends Component {
  /*
   constructor(props){
      super(props)
    }
    
*/
/* 
  render(){

    
 
  return (
      <div className = "card-p">
        <div className = "head-p">
          Solucion #{this.props.preg.id}  <span>{this.props.preg.universidad} {this.props.preg.anio}</span>
        </div> 
        <div className = "body-p">
          <img alt = "Solucion" src = {this.props.preg.preg}></img>
        </div>
        <div className = "keywords">
          keywords: 
          {this.props.preg.keywords.map((i,k)=>{
            return(
              <a key = {k} href = "#" >{i}</a>
            )
          })}
        </div>
        <Solucion sol = {this.props.preg.sol}/>
      </div>
  )};
}

export default Solucion;

*/