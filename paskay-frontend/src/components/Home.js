import React, {Component} from 'react';

import Pregunta from './Pregunta'

class Home extends Component {
   constructor(props){
      super(props)
     console.log(this.props.preguntas)
    }
  
  render(){
  return (
    <div>
      {
        this.props.preguntas.map((p) => {
          return(
            <Pregunta preg = {p}/>
          )
        })
      }  
    </div>
  )};
}

export default Home;
