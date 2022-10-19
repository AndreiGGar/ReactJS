import { Component } from "react";
import Sport from "./Sport";

class Sports extends Component {
  state = {
    sports: ["Football", "Tennis", "Voleyball", "Basketball", "Swimming"],
    favourite: ""
  };

  functionParent = (selectedSport) => {
    this.setState({
      favourite: selectedSport
    })
  }

  render() {
    return (
      <div>
        <h3 style={{color: "crimson"}}>Sports</h3>
        <h3 style={{color: "orange"}}>Favourite Sport: {this.state.favourite}</h3>
        {this.state.sports.map((name, index) => {
          return (<Sport fParent={this.functionParent} name={name} key={"id" + index} id={"id" + index}/>);
        })}
      </div>
    );
  }
}

export default Sports;
