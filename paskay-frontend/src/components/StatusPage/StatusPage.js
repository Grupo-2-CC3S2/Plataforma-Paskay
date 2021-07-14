import React, {Component} from 'react';

class StatusPage extends Component {
  
  constructor(props) {
    super(props);
    console.log("props",this.props)
  }
  render(){
    if (!this.props.status) return  <div></div>
  if (this.props.status == "200") return (
                                          <div className="container">
                                              {this.props.message}
                                          </div>
                                        )
   if (this.props.status == "400") return (
                                          <div className="container">
                                              {this.props.message}
                                          </div>
                                        )
  
  }
}

export default StatusPage;
