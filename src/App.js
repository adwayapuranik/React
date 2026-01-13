import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet.js' //for default export {Greet} and <Greet / >
//import MyComponent from './components/Greet.js' //default export

class App extends Component {
  render() {
    return (
    <div className = "App">
      <Greet /> 
      {/* <MyComponent /> default export */}
    </div>
    );
  }
}

export default App;
