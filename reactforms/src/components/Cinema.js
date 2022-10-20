import { Component } from "react";
import cinema from "../assets/images/cinema.jpg";

export default class Cinema extends Component {
  render() {
    return (
      <div>
        <h3>Cinema</h3>
        <img
          src={cinema}
          alt=""
          style={{ width: "250px", height: "150px" }}
        ></img>
      </div>
    );
  }
}
