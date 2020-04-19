import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                 <header className="masthead text-center text-white">
                    <div className="masthead-content">
                    <div className="container">
                        <h1 className="masthead-heading mb-0">That is a website to learn ReactJS and NodeJS by hieutran</h1>
                        <h2 className="masthead-subheading mb-0">Out of scope for tester :v</h2>
                        <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">More Learning</a>
                    </div>
                    </div>
                    <div className="bg-circle-1 bg-circle" />
                    <div className="bg-circle-2 bg-circle" />
                    <div className="bg-circle-3 bg-circle" />
                    <div className="bg-circle-4 bg-circle" />
                </header>
            </div>
        );
    }
}

export default Header;