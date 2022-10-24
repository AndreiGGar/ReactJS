import React, { Component } from "react";

export default class MultiSelectForm extends Component {
  selectMultiple = React.createRef();
  state = {
    selected: "",
  };

  generateOptions = () => {
    var options = [];
    for (var i = 1; i <= 10; i++) {
      options.push(
        <option key={i} value={"Element " + i}>
          {"Element " + i}
        </option>
      );
    }
    return options;
  };

  showSelected = (e) => {
    e.preventDefault();
    // Options reserved word
    var options = this.selectMultiple.current.options;
    var data = "";
    for (var option of options) {
      if (option.selected === true) {
        data += option.value + "; ";
      }
    }
    console.log(data);
    this.setState({
      selected: data,
    });
  };

  render() {
    return (
      <div>
        <h3>Select Multiple Forms</h3>
        <form onSubmit={this.showSelected}>
          <label>Select Elements: </label>
          <br />
          <br />
          <select ref={this.selectMultiple} size="10" multiple>
            {this.generateOptions()}
          </select>
          <br />
          <br />
          <button type="sumbit">Show selected:</button>
        </form>
        <h4 style={{ color: "crimson" }}>
          {this.state.selected}
        </h4>
      </div>
    );
  }
}
