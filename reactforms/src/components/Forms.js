import React, { Component } from "react";

export default class Forms extends Component {
  nameBox = React.createRef();
  ageBox = React.createRef();

  getForm = (e) => {
    e.preventDefault();
    this.setState({
      user: {
        name: this.nameBox.current.value,
        age: this.ageBox.current.value,
      },
    });
  };

  state = {
    user: null,
  };

  render() {
    return (
      <div className="App">
        <h3>Form</h3>
        {this.state.user && (
          <div>
            <h4>
              User: {this.state.user.name}; Age: {this.state.user.age}
            </h4>
          </div>
        )}
        <form onSubmit={this.getForm}>
          <label>Name: </label>
          <input type="text" id="name" ref={this.nameBox} />
          <label>Age: </label>
          <input type="text" id="age" ref={this.ageBox} />
          <button>Send Form</button>
        </form>
      </div>
    );
  }
}
