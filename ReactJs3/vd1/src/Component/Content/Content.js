import React, { Component } from 'react';

class Content extends Component {
    // nhan props nen dung constructor
    constructor(props) {
        super(props); // bao toan lai lop cha Component
        this.state ={
            trangThai:0
        }
        
    }
    thongbao = () =>{
        alert('Edit this item')
    }
    thongbao2 = () =>{
        alert('Remove this item')
    }
    
    renderButton = () =>(
        <div className="row">
            <div className="btn btn-group">
                <div className="btn btn-info" onClick={this.editClick}>Edit</div>
                <div className="btn btn-warning" onClick={this.thongbao2}>Remove</div>
            </div>
        </div>
    )

    renderForm = () =>(
        <div className="row">
            <div className="form-group">
                <input ref={(duLieuNhap) => {this.trungGian = duLieuNhap}} defaultValue={this.props.tieude} type="text" name="ten" className="form-control"/>
                <div className="btn btn-block btn-success" onClick={this.saveClick}>Save</div>
            </div>
        </div>
    )
    
    displayCheck = () =>{
        if(this.state.trangThai === 0){
            return this.renderButton();
        }else{
            return this.renderForm();
        }
    }
    editClick = () =>{
        this.setState({trangThai:1});
    }

    saveClick = () =>{
        this.setState({trangThai:0});
        console.log(this.trungGian.value)
        // this.thongbao()
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
                            {this.displayCheck()}
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;