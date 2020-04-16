import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Counter />
      {/* <Message /> */}
      {/*<Greet name = "Vakul" heroName = "Thor">
        <p>this is a children props</p>
        </Greet> 
      <Greet name = "Nikil" heroName = "Iron man">
        <button>Action </button>
        </Greet>
      <Greet name = "Valusa" heroName = "Super man"/>
      <Welcome name = "Vakul" heroName = "Thor"/>
      <Welcome name = "Nikil" heroName = "Iron man"/>
      <Welcome name = "Valusa" heroName = "Super man"/>
      {/* <Hello/> */}
      </div>
    );
  }
}

export default App;