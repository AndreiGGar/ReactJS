import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { NavLink } from "react-router-dom";

export default class Teams extends Component {
  state = {
    team: {},
    status: false,
  };

  loadTeam = () => {
    var request = "api/Equipos/" + this.props.number;
    var url = Global.urlApi + request;
    axios.get(url).then((response) => {
      this.setState({
        team: response.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadTeam();
  };

  render() {
    if (this.state.status == true) {
      return (
        <div>
          <h3 className="mt-4 mb-4">Teams</h3>
          <div className="row d-flex justify-content-center">
            <div class="card text-center w-50">
              <div class="card-header">{this.state.team.nombre}</div>
              <div class="card-body">
                <img
                  src={this.state.team.imagen}
                  alt={this.state.team.imagen}
                  style={{ width: "150px", height: "150px" }}
                />
                <h5 class="card-title">
                  Shempions: {this.state.team.champions}
                </h5>
                <p class="card-text">{this.state.team.descripcion}</p>
                <NavLink to={"/teams/players/" + this.state.team.idEquipo}>
                  <button className="btn btn-success">Players</button>
                </NavLink>
                <NavLink to={"/"}>
                  <button className="btn btn-primary">Go Back</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
