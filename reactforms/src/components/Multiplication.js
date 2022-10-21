import React, { Component } from "react";

export default class Multiplication extends Component {
  numberBox = React.createRef();

  state = {
    // number: null,
    arrayNumbers: [],
    arrayOperation: []
  };

  selectNumbers = React.createRef();

  randomNumbers = () => {
    this.state.arrayNumbers = [];

    for (var i = 0; i < 10; i++) {
      var number = Math.floor(Math.random() * 100 + 1);
      this.state.arrayNumbers.push(number);
    }
    // console.log(this.state.arrayNumbers);
    
    this.setState({
      arrayNumbers: this.state.arrayNumbers
    })
  };

  sum = () => {
    var n = this.selectNumbers.current.value;
    this.state.arrayOperation = [];

    console.log(n)

    for (var i = 0; i < 10; i++) {
      n = n * (i + 1);
      this.state.arrayOperation.push(n);
    }
    
    this.setState({
      arrayOperation: this.state.arrayOperation
    })

    console.log(this.state.arrayOperation);
  };

  // getForm = (e) => {
  //   e.preventDefault();
  //   this.state.arrayNumbers = []
  //   this.state.number = parseInt(this.numberBox.current.value);

  //   this.setState({
  //       number: this.numberBox.current.value,
  //   });

  //   for (var i = 0; i < 10; i++) {
  //     this.state.number = this.numberBox.current.value * (i + 1)
  //     this.setState({
  //       number: this.state.number
  //     })
  //     this.state.arrayNumbers.push(this.state.number);
  //   }

  //   console.log(this.state.arrayNumbers)
  // };

  render() {
    return (
      <div className="App">
        <h3>Multiplication</h3>
        <select ref={this.selectNumbers} onClick={this.randomNumbers}>
          {this.state.arrayNumbers &&
            this.state.arrayNumbers.map((number, index) => {
              return (
                <option number={number} key={"id" + index} id={"id" + index} onClick={this.sum()}>
                  {number}
                </option>
              );
            })}
        </select>
        {this.state.arrayOperation && (
          <div>
            {this.state.arrayOperation.map((number, index) => {
              return (<li number={number} key={"id" + index} id={"id" + index}>{index} * {index + 1}: {number}</li>);
            })}
          </div>
        )}
        {/* {this.state.arrayNumbers && (
          <div>
            {this.state.arrayNumbers.map((number, index) => {
              return (<li number={number} key={"id" + index} id={"id" + index}>{this.numberBox.current.value} * {index + 1}: {number}</li>);
            })}
          </div>
        )} */}
        {/* <form onSubmit={this.getForm}>
          <label>Number: </label>
          <input type="text" id="number" ref={this.numberBox} />
          <button style={{marginLeft: "10px"}}>Send Number</button>
        </form> */}
      </div>
    );
  }
}
