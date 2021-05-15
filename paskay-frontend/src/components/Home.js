import React, {Component} from 'react';

import Pregunta from './Pregunta'

class Home extends Component {
  
  render(){
  return (
    <div>
      {
        this.props.preguntas.map((p) => {
          return(
            <Pregunta key = {"preg" + p.id} preg = {p}/>
          )
        })
      }  
    </div>
  )};
}

export default Home;
