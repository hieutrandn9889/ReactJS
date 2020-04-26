import React, { Component } from 'react';

class Content extends Component {
    // nhan props nen dung constructor
    constructor(props) {
        super(props); // bao toan lai lop cha Component
    }
    thongbao = () =>{
        alert('Edit this item')
    }
    thongbao2 = () =>{
        alert('Remove this item')
    }
    
    render() {
        return (
            <div className="col-lg-4">
                <div className="row">
                    {/* <div className={"col-lg-6 " + this.props.vitri}></div> */}
                    
                    <div className="col-lg-6 ">
                        <div className="p-1">
                            <img className="img-fluid rounded-circle" src={this.props.anh} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-7 ">
                        <div className="p-1">
                            <h2 className="display-4">{this.props.tieude}</h2>
                            <p>
                                {this.props.trichdan}
                            </p>
                            <div className="row">
                                <div className="btn btn-group">
                                    <div className="btn btn-info" onClick={this.thongbao}>Edit</div>
                                    <div className="btn btn-warning" onClick={this.thongbao2}>Remove</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


           
        );
    }
}

export default Content;