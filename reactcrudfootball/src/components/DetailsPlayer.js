import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { NavLink } from "react-router-dom";

export default class DetailsPlayer extends Component {
  state = {
    player: {},
    status: false,
  };

  loadPlayer = () => {
    var request = "api/Jugadores/" + this.props.number;
    var url = Global.urlApi + request;
    axios.get(url).then((response) => {
      this.setState({
        player: response.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadPlayer();
  };

  render() {
    if (this.state.status == true) {
      return (
        <div>
          <h3 className="mt-4 mb-4">Player</h3>
          <div className="row d-flex justify-content-center">
            <div class="card text-center w-50">
              <div class="card-header">{this.state.player.nombre}</div>
              <div class="card-body">
                <img
                  src={this.state.player.imagen}
                  alt={this.state.player.imagen}
                  style={{ width: "150px", height: "150px" }}
                />
                <h5 class="card-title">
                  {this.state.player.posicion}
                </h5>
                <p class="card-text">{"Birthday: " + this.state.player.fechaNacimiento}</p>
                <p class="card-text">{"Country: " + this.state.player.pais}</p>
                <NavLink to={"/teams/players/" + this.state.player.idEquipo}>
                  <button className="btn btn-success">Players</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
