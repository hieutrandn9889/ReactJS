import React, { Component } from 'react';
import NoiDungUpdationProps from './NoiDungUpdationProps';
class LifeCycleUpdationProps extends Component{
    constructor(props){
      super(props);
      this.state = {
        trangThaiProps:"khoiTaoProps"
      }
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
      console.log(this.state.trangThaiProps);
      
      return(
        <div>
            <NoiDungUpdationProps ten={this.state.trangThaiProps}></NoiDungUpdationProps>
            <button onClick={() => this.capNhapState()}>Click to update state</button>
        </div>
      )
    }
  }

export default LifeCycleUpdationProps;