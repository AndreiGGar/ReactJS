import { Component } from "react";

class Sport extends Component {
  state = {
    favourite: ""
  }

  selectedSport = () => {
    this.props.fParent(this.props.name)
  }

  render() {
    return (
      <div>
        <h3>{this.props.name} --- {this.props.id}</h3>
        <button type="button" onClick={this.selectedSport}>Select Sport</button>
      </div>
    );
  }
}

export default Sport;
