import React, { Component } from 'react';
class LifeCycleMounting extends Component{
    constructor(props){
      super(props);
      this.state = {
        trangThai:"khoiTao"
      }
    }
    componentWillMount(){
      console.log("componentWillMount da chay");
    }
    componentDidMount() {
      console.log("componentDidMount da chay");
    }
    render() {
      console.log("Day la ham render da chay");
      return(
        <div></div>
      )
    }
  }

export default LifeCycleMounting;