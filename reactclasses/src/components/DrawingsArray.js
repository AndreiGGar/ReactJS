import { Component } from "react";

// var arrayList = [];
// for (let index = 0; index < 7; index++) {
//   var number = Math.floor(Math.random() * 100 + 1);
//   arrayList.push(<li key={index}>{number}</li>);
// }

class DrawingsArray extends Component {
  state = {
    names: ["Rose", "Rebbeca", "Marcus", "Jones"]
  }
  // state = { arrayList: this.arrayList };

  newName = () => {
    this.state.names.push("Jordan");
    this.setState({
      names: this.state.names
    })
  }

  render() {
    return (
      <div>
        <h3>Drawings</h3>
        <button type="button" onClick={this.newName}>New Name</button>
        {this.state.names.map((name, index) => {
          return <p key={index}>{name}</p>;
        })}
      </div>
    );
  }
}

export default DrawingsArray;
