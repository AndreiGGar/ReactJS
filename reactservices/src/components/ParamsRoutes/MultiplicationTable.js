import React, { Component } from "react";

export default class MultiplicationTable extends Component {
  state = {
    table: [],
  };

  generateTable = () => {
    var data = [];
    for (let i = 1; i <= 10; i++) {
      var op = parseInt(this.props.Number) * i;
      data.push(this.props.Number + " * " + i + " = " + op);
    }
    this.setState({
      table: data,
    });
  };

  componentDidMount = () => {
    this.generateTable();
  };

  componentDidUpdate = (oldProps) => {
    if (this.props.Number != oldProps.Number) {
      this.generateTable();
    }
  };

  render() {
    return (
      <div>
        <h3>Multiplication Table {this.props.Number}</h3>
        <table className="table table-hover">
          <thead></thead>
          <tbody>
            {this.state.table.map((number, index) => {
              return (
                <tr key={index}>
                  <td>{number}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <ul style={{ display: "inline-block" }}>
          {this.state.table.map((number, index) => {
            return <li key={index}>{number}</li>;
          })}
        </ul> */}
      </div>
    );
  }
}
