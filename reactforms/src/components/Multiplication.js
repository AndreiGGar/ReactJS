import React, { Component } from 'react'

export default class Multiplication extends Component {
  boxNumber = React.createRef();
  selectNumber = React.createRef();

  showTable = (e) => {

    e.preventDefault();

    //var num = parseInt(this.boxNumber.current.value); 

    var num = parseInt(this.selectNumber.current.value);
    var data = [];

    for (var i = 1; i <= 10; i++) {
      var result = num * i;
      var operation = num + " * " + i;

      data.push(
        <tr key={i}>
          <td>{operation}</td>
          <td>{result}</td>
        </tr>
      );
    }

    this.setState({

      rows: data

    });

  }

  generarOptions = () => {
    var options = [];

    for (var i = 1; i <= 5; i++) {
      var random = parseInt(Math.random() * 100) + 1;
      options.push(<option>{random}</option>);
    }
    return options;
  }

  state = {
    rows: []
  }

  render() {

    return (

      <div>
        <h1>Table Multiplication</h1>
        <form onSubmit={this.showTable}>
          <label>Select a number </label>
          <select ref={this.selectNumber}>
            {this.generarOptions()}
          </select>
          <br />
          <label>Introduce a number</label>
          <input ref={this.boxNumber} />
          <button>
            Show table
          </button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Operation</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {this.state.rows}
          </tbody>
        </table>
      </div>
    )
  }
} 