import { Component } from "react";

function otherFunction() {
  console.log("External function");
}

class Counter extends Component {
  number = 1;
  increaseNumber = () => {
    console.log("Number " + this.number);
    this.number += 1;
  };

  state = { value: parseInt(this.props.start) };
  increaseValue = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  render() {
    return (
      <div>
        <h3>Counter</h3>
        <h3>Start: {this.props.start}</h3>
        <h3>State value: {this.state.value}</h3>
        <button type="button" onClick={this.increaseValue}>
          Counter Value State
        </button>
        <button
          type="button"
          onClick={() => {
            otherFunction();
            this.increaseNumber();
          }}
        >
          Counter Number
        </button>
      </div>
    );
  }
}

export default Counter;
