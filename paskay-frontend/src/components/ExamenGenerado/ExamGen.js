
import React, {Component} from 'react';
import { connect } from 'react-redux'
import PreguntaDeExamen from './PreguntaDeExamen/PreguntaDeExamen';
import './ExamGen.css'
import './../commonStyles.css'
import {changeTest2} from '../../redux/ActionCreators';

// ======== variables del componente ==========
  var arrSecciones =['Letras y RM', 'Matemática', 'Física y Química']
  var arrCursos=['RM']
// ========Fin variables del componente ==========

class ExamGen extends Component {

   constructor(props){
     super(props)
        
    }
 
  
  render(){
  return (
    <div className = "container">
      <div className="row text-left">
        <div className="col-md-12"><h3>Enunciados de {arrSecciones[0]}</h3><hr></hr></div>
        <div className='col-md-6'><PreguntaDeExamen/></div>
        <div className='col-md-6'><PreguntaDeExamen/></div>
        <div className='col-md-6'><PreguntaDeExamen/></div>
        <div className='col-md-6'><PreguntaDeExamen/></div>
        <div className='col-md-6'><PreguntaDeExamen/></div>
        <div className="col-md-12"><h3>Enunaciados de {arrSecciones[1]}</h3><hr></hr></div>
        <div className="col-md-12"><h3>Enunaciados de {arrSecciones[2]}</h3><hr></hr></div>
      </div>
    
      
    
    </div>

    
  )};
}


//connect(mapStateToProps)(MyComponent)
export default ExamGen;
