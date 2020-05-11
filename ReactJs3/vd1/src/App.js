import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu';
import Header from './Component/Header/Header';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';
import MapApp from './Component/MapApp/MapApp';
import LifeCycleMounting from './Component/LifeCycle/LifeCycleMounting';
import LifeCycleUpdationState from './Component/LifeCycle/LifeCycleUpdationState';
import LifeCycleUpdationProps from './Component/LifeCycle/LifeCycleUpdationProps';



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

//run commom
function App() {
  return (
    <div className="App">
     <TopMenu/>
     <Header/>
     <div className="container">
        <div className="row pt-5">
          <Content tieude="Test1" vitri="order-lg-1" anh="img/01.jpg" trichdan="Tin tuc 1"/>
          <Content tieude="Test2" anh="img/02.jpg" trichdan="Tin tuc 2"/>
          <Content tieude="Test3" vitri="order-lg-1" anh="img/03.jpg" trichdan="Tin tuc 3"/>
          <Content tieude="Test1" vitri="order-lg-1" anh="img/01.jpg" trichdan="Tin tuc 1"/>
          <Content tieude="Test2" anh="img/02.jpg" trichdan="Tin tuc 2"/>
          <Content tieude="Test3" vitri="order-lg-1" anh="img/03.jpg" trichdan="Tin tuc 3"/>
          <Content tieude="Test1" vitri="order-lg-1" anh="img/01.jpg" trichdan="Tin tuc 1"/>
          <Content tieude="Test2" anh="img/02.jpg" trichdan="Tin tuc 2"/>
          <Content tieude="Test3" vitri="order-lg-1" anh="img/03.jpg" trichdan="Tin tuc 3"/>
        </div>
     </div>
     <Footer/>
      {/* 
      <MapApp/>
      <JSXApp/>
      <PropsOne tieuDe="Dung props theo cach 1 su dung function" linkAnh="https://kenh14cdn.com/2020/4/7/9259164428738153793622975906720805378588672n-1586265443630314075999.jpg" />
      <PropsTwo tieuDe="Dung props theo cach 2 su dung class" linkAnh="https://kenh14cdn.com/2020/4/7/9259164428738153793622975906720805378588672n-1586265443630314075999.jpg" />
      <One />
      <Two />
      <Three />
      <Four />
      <LifeCycleMounting/>
      <LifeCycleUpdationState/>
      */}
      <LifeCycleUpdationProps/>
      
    </div>
  );
}

export default App;
