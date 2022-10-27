import React, { Component } from "react";
import Haaland from "../assets/images/Haaland.jpeg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center">Home</h3>
        <div className="row d-flex justify-content-center">
          <img src={Haaland} alt="Haaland" className="w-50" />
        </div>
      </div>
    );
  }
}
