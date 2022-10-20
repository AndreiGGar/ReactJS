import { Component } from "react";
import music from "../assets/images/music.jpg";

export default class Music extends Component {

  render() {
    return (
      <div>
        <h3>Music</h3>
        <img
          src={music}
          alt=""
          style={{ width: "250px", height: "150px" }}
        ></img>
      </div>
    );
  }
}
