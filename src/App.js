import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './Counter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counters />
      </div>
    );
  }
}

export default App;
