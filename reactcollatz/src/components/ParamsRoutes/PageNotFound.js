import React, { Component } from "react";
import auron from '../../assets/images/auron.jpg'
import ibai from '../../assets/images/ibai.jpg'

export default class PageNotFound extends Component {

  render() {
    return (
      <div>
        <h2>Not found</h2>
          <img src={ibai} alt={ibai}/>
      </div>
    );
  }
}
