import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>I'm a button</Button>
        <Button primary>I'm a primary button</Button>        
        <Button secondary>I'm a secondary button</Button>        
      </div>
    );
  }
}

export default App;
