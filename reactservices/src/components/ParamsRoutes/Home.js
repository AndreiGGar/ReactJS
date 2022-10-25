import React, { Component } from "react";
import auron from '../../assets/images/auron.jpg'

export default class Home extends Component {

  render() {
    return (
      <div>
        <h2>Home</h2>
          <img src={auron} alt={auron}/>
      </div>
    );
  }
}