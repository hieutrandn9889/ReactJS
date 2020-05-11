import React, { Component } from 'react';

class NoiDungUpdationProps extends Component {
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps da chay");
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate da chay");
        return true;
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