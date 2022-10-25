import React, { Component } from "react";

export default class Collatz extends Component {
  numberBox = React.createRef();

  state = {
    arrayNumbers: [],
    number: 0
  };

  generateCollatz = () => {
    this.state.arrayNumbers = [];
    this.state.number = parseInt(this.props.Number);
    this.setState({
      number: this.props.Number,
    });

    this.state.arrayNumbers.push(this.state.number);

    while (this.state.number !== 1) {
      if (this.state.number % 2 === 0) {
        this.state.number = this.state.number / 2;
      } else {
        this.state.number = this.state.number * 3 + 1;
      }
      this.setState({
        number: this.state.number,
      });
      this.state.arrayNumbers.push(this.state.number);
    }
  };

  componentDidMount = () => {
    this.generateCollatz();
  };

  componentDidUpdate = (oldProps) => {
    if (this.props.Number != oldProps.Number) {
      this.generateCollatz();
    }
  };

  render() {
    return (
      <div>
        <h3>Collatz {this.props.Number}</h3>
        <table className="table table-hover">
          <thead></thead>
          <tbody>
            {this.state.arrayNumbers.map((number, index) => {
              return (
                <tr key={index}>
                  <td><li>{number}</li></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
