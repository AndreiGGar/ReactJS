import { Component } from "react";

class Drawings extends Component {
  drawNumbers = () => {
    var arrayList = [];
    for (let index = 0; index < 7; index++) {
      var number = Math.floor((Math.random()*100)+1);
      arrayList.push(<li key={index}>{number}</li>)
    }
    return arrayList;
  }

  render() {
    return (
      <div>
        <h3>Drawings</h3>
        <ul>
          {this.drawNumbers()}
        </ul>
      </div>
    );
  }
}

export default Drawings;
