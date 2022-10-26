import React, { Component } from "react";
import {Navigate} from 'react-router-dom'

export default class DetailsDept extends Component {
  render() {
    return (
      <div className="text-center mt-4">
        <h3>DetailsDept &gt; {this.props.number}</h3>
        <h4 style={{color: "cyan"}}>
          Name: {this.props.name}
        </h4>
        <h4 style={{color: "orange"}}>
          Location: {this.props.location}
        </h4>
        <button className="btn btn-primary" onClick={() => (<Navigate to="/"/>)}>Go Home</button>
      </div>
    );
  }
}
