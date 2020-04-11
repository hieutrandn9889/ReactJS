import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const a1="hieu";
// khai bao theo ham bt
function One() {
  return (
    <div>
      <h1>Kieu ham binh thuong</h1>
    </div>
  )
}

// khai bao theo anymomous function
var Two = function () {
  return (
    <div>
      <h1> Kieu anynomous function</h1>
    </div>
  )
}

//Khai bao theo es6
var Three = () => (
  <div>
    <h1>Kieu es6</h1>
  </div>
)

// khai bao theo class
class Four extends Component {
  render() {
    return (
      <div>
        <h1>Kieu class</h1>
      </div>
    );
  }
}

// su dung props cach 1
var UsePropsOne = (props) => (
  <div>
    <h1>{props.tieuDe}</h1>
    <img className="card-img-top" src={props.linkAnh} alt="" />
  </div>
)
//  su dung props cach 2 >> su dung class de dinh nghia va thao tac voi props
class UsePropsTwo extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.tieuDe}</h1>
        <img className="card-img-top" src={this.props.linkAnh} alt="" />
      </div>
    );
  }
}

// JSX
class App1 extends Component {
  render() {
    return (
      <div>
        <h3 className="nut">Ten tui la: {a1}</h3>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
            Display value
          </label>
        </div>
      </div>
    );
  }
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UsePropsOne tieuDe="Dung props theo cach 1 su dung function" linkAnh="https://kenh14cdn.com/2020/4/7/9259164428738153793622975906720805378588672n-1586265443630314075999.jpg" />
        <UsePropsTwo tieuDe="Dung props theo cach 2 su dung class" linkAnh="https://kenh14cdn.com/2020/4/7/9259164428738153793622975906720805378588672n-1586265443630314075999.jpg" />
        <One />
        <Two />
        <Three />
        <Four />
        <App1/>
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
