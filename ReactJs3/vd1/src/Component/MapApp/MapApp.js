import React, { Component } from 'react';
const so = [1,2,3,4,5,6,7,8,9]
const so1 = so.map((x) =>(x*2+ ","))
const so2 = so.map( (x)=> (
  <li>So: {x}</li>
));
class MapApp extends Component {
  render() {
    return (
      <div>
        {so1}
        {so2}
      </div>
    );
  }
}

export default MapApp;