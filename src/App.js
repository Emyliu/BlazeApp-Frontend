import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';
import { FilesDemo } from './FileReader';
import { BasicInformation } from './BasicInformation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let _this= this;
    event.preventDefault();
    axios.post('https://agile-shelf-72094.herokuapp.com/upload/', {"file": sessionStorage.getItem('file')})
    .then(function(res) {
      console.log(res.data);
      _this.setState({data: res.data, submitted: true})
    })
    .catch(function(err) {
      window.alert("Something went wrong while analyzing your file!");
      window.location.reload();
      console.log(err);
    });
  }
  render() {
    return (
      <div className="App">
      {this.state.data ? <BasicInformation data={this.state.data}/> : <FilesDemo handleSubmit={this.handleSubmit}/>}
      </div>
    );
  }
}

export default App;
