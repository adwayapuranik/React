import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
    <div className = "App">
      {/* <Welcome />  */}
      {/* <Hello /> */}
      <Greet name="Kira" heroName="Wonderwoman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Bruce" heroName="Batman">
        <button>Action</button>
      </Greet>
      <Greet name="clarke" heroName="Superman"/>

    </div>
    );
  }
}

export default App;