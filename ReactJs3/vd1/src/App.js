import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu.js';
import Header from './Component/Header/Header.js';
import Content from './Component/Content/Content.js';
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
var PropsOne = (props) => (
  <div>
    <h1>{props.tieuDe}</h1>
    <img className="card-img-top" src={props.linkAnh} alt="" />
  </div>
)
//  su dung props cach 2 >> su dung class de dinh nghia va thao tac voi props
class PropsTwo extends Component {
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
class JSXApp extends Component {
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

//map
const so = [1,2,3,4,5,6,7,8,9]
const so1 = so.map((x) =>(x*2+ ","))
const so2 = so.map( (x)=> (
  <li>So: {x}</li>
));
class MapApp extends Component {
  render() {
    return (
      <div>
        {so1}
        {so2}
      </div>
    );
  }
}

//run commom
function App() {
  return (
    <div className="App">
     <TopMenu/>
     <Header/>
     <Content tieude="Test" vitri="order-lg-1"/>
     <Content tieude="Test"/>
      {/* <MapApp/>
      <JSXApp/>
      <PropsOne tieuDe="Dung props theo cach 1 su dung function" linkAnh="https://kenh14cdn.com/2020/4/7/9259164428738153793622975906720805378588672n-1586265443630314075999.jpg" />
      <PropsTwo tieuDe="Dung props theo cach 2 su dung class" linkAnh="https://kenh14cdn.com/2020/4/7/9259164428738153793622975906720805378588672n-1586265443630314075999.jpg" />
      <One />
      <Two />
      <Three />
      <Four /> */}
    </div>
  );
}

export default App;
