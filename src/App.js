import React , { Component } from 'react'
import axios from 'axios'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          responseData:null
        };

    };
    componentDidMount(){
      let requestData = {"command":"request_session",
          "params":{
              "site_id":733,
              "language": "eng"}
      }
     axios.post('https://eu-swarm-test.betconstruct.com',requestData)
         .then(function (response) {
             console.log(response.data)
             this.setState({responseData:response.data})
         }.bind(this))
         .catch(function (error) {
             console.log(error)
             this.setState({responseData:null})
         }.bind(this))
    }
    render() {
        return (
            <div>
                {
                  this.state.responseData?<div>
                          <p>Code : {this.state.responseData.code}</p>
                          <p>Data Source : {this.state.responseData.data.data_source}</p>
                          <p>Host : {this.state.responseData.data.host}</p>
                          <p>IP : {this.state.responseData.data.ip}</p>
                          <p>SID : {this.state.responseData.data.sid}</p>
                      </div>:
                      <p>Nothing in response yet</p>
                }
            </div>
        )
    }
}
export default App