import React, { Component } from 'react';
class LifeCycleUpdationState extends Component{
    constructor(props){
      super(props);
      this.state = {
        trangThaiState:"khoiTaoState"
      }
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate da chay");
        return true;
    }

    componentWillUpdate(){
        console.log("componentWillUpdate da chay");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate da chay");
    }

    capNhapState =() => {
        this.setState({
            trangThai:"Trang thai dc update"
        });
    }

    render() {
      console.log("Day la ham render da chay");
      console.log(this.state.trangThaiState);
      
      return(
        <div>
            <button onClick={() => this.capNhapState()}>Click to update state</button>
        </div>
      )
    }
  }

export default LifeCycleUpdationState;