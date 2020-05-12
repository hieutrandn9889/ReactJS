import React, { Component } from 'react';
import NoiDungUpdationProps from './NoiDungUpdationProps';
class LifeCycleUpdationProps extends Component{
    constructor(props){
      super(props);
      this.state = {
        trangThai1:"khoiTaoProps1",
        trangThai2:"khoiTaoProps2"
      }
    }

    capNhapState =() => {
        this.setState({
          trangThai1:"Trang thai dc update 1",
          trangThai2:"Trang thai dc update 2"
        });
    }

    render() {
      console.log(this.state.trangThai1);
      return(
        <div>
            <NoiDungUpdationProps ten={this.state.trangThai2}></NoiDungUpdationProps>
            <button onClick={() => this.capNhapState()}>Click to update state</button>
        </div>
      )
    }
  }

export default LifeCycleUpdationProps;