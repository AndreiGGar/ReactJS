import React, { Component } from "react";

export default class Collatz extends Component {
  numberBox = React.createRef();

  state = {
    number: null,
    arrayNumbers: []
  };

  getForm = (e) => {
    e.preventDefault();
    this.state.arrayNumbers = []
    this.state.number = parseInt(this.numberBox.current.value);
    this.setState({
        number: this.numberBox.current.value,
    });

    this.state.arrayNumbers.push(this.state.number);

    while (this.state.number !== 1) {
      if (this.state.number % 2 === 0) {
        this.state.number = this.state.number / 2
      } else {
        this.state.number = (this.state.number * 3) + 1
      }
      this.setState({
        number: this.state.number
      })
      this.state.arrayNumbers.push(this.state.number);
    }
  };

  render() {
    return (
      <div className="App">
        <h3>Collatz</h3>
        {this.state.number && (
          <div>
            {this.state.arrayNumbers.map((number, index) => {
              return (<li number={number} key={"id" + index} id={"id" + index}>{number}</li>);
            })}
          </div>
        )}
        <form onSubmit={this.getForm}>
          <label>Number: </label>
          <input type="text" id="number" ref={this.numberBox} />
          <button style={{marginLeft: "10px"}}>Send Collatz</button>
        </form>
      </div>
    );
  }
}
