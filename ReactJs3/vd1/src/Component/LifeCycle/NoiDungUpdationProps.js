import React, { Component } from 'react';

class NoiDungUpdationProps extends Component {
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps da chay " + nextProps.ten);
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
    render() {
        return (
            <div>
                <h4>{this.props.ten}</h4>
            </div>
        );
    }
}

export default NoiDungUpdationProps;