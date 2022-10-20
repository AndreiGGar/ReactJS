import { Component } from "react";
import home from "../assets/images/home.jpg";

export default class Home extends Component {

  render() {
    return (
      <div>
        <h3>Home</h3>
        <img
          src={home}
          alt=""
          style={{ width: "250px", height: "150px" }}
        ></img>
      </div>
    );
  }
}