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
var UseProps = (props) => (
  <div>
      <h1>{props.tieuDe}</h1>
      <img className="card-img-top" src={props.linkAnh} alt=""/>
      
  </div>
)



function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <UseProps tieuDe="Dich Benh" linkAnh="https://kenh14cdn.com/2020/4/7/9259164428738153793622975906720805378588672n-1586265443630314075999.jpg"/>
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
