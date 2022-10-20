import { Component } from "react";
import Number from "./Number";

class Numbers extends Component {
  state = {
    arrayNumbers: [],
    sum: 0
  }

  sumNumbers = (sumN) => {
    this.setState ({
      sum: this.state.sum + sumN
    })
  }

  newNumber = () => {
    var number = Math.floor((Math.random()*100)+1);
    this.state.arrayNumbers.push(number);
    this.setState ({
      arrayNumbers: this.state.arrayNumbers,
    })
    console.log(this.state.arrayNumbers);
  }

  render() {
    return (
      <div>
        <h3 style={{color: "crimson"}}>Parent Numbers</h3>
        <h4>The sum is: {this.state.sum}</h4>
        <button onClick={this.newNumber}>New Number</button>
        {this.state.arrayNumbers.map((number, index) => {
          return (<Number fParent={this.sumNumbers} sum={this.state.sum} number={number} key={"id" + index} id={"id" + index}/>);
        })}
      </div>
    );
  }
}

export default Numbers;
