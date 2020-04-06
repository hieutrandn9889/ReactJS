import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
function One() {
  return (
    <div>
      <h1>Kieu ham binh thuong</h1>
    </div>
  )
}
var Two = function(){
  return(
    <div>
      <h1> Kieu anynomous function</h1>
    </div>
  )
}
var Three = () => (
  <div>
    <h1>Kieu es6</h1>
  </div>
)
class Four extends Component {
  render() {
    return (
      <div>
        <h1>Kieu class</h1>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <One/>
        <Two/>
        <Three/>
        <Four/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
