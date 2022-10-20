import { Component } from "react";

class Number extends Component {
  state = {
    sum: 0
  }

  sumNumber = () => {
    this.props.fParent(this.props.number)
  }

  render() {
    return (
      <div>
        <h3>Number son: {this.props.number}</h3>
        <button type="button" onClick={this.sumNumber}>Sum {this.props.number}</button>
      </div>
    );
  }
}

export default Number;
