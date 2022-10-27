import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { NavLink } from "react-router-dom";

export default class Players extends Component {
  state = {
    players: [],
    status: false,
  };

  loadPlayers = () => {
    var request = "api/Jugadores/JugadoresEquipo/" + this.props.number;
    var url = Global.urlApi + request;
    axios.get(url).then((response) => {
      this.setState({
        players: response.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadPlayers();
  };

  render() {
    if (this.state.status == true) {
      return (
        <div>
          <h3 className="mt-4 mb-4">Players</h3>
          <div className="row d-flex text-center">
            <NavLink to={"/teams/" + this.props.number}>
              <button className="btn btn-danger mb-4">Go Back</button>
            </NavLink>
          </div>
          <table className="table table-bordered table-dark text-center">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>More Details</th>
                {/* <th>Position</th>
                <th>Birthday</th>
                <th>Country</th> */}
              </tr>
            </thead>
            <tbody>
              {this.state.players.map((player, index) => {
                return (
                  <tr key={player.idJugador}>
                    <td>{player.nombre}</td>
                    <td>
                      <img
                        src={player.imagen}
                        alt={player.imagen}
                        style={{ width: "150px", height: "150px" }}
                      />
                    </td>
                    {/* <td>{player.posicion}</td>
                    <td>{player.fechaNacimiento}</td>
                    <td>{player.pais}</td> */}
                    <td>
                      <NavLink
                        to={"/teams/players/details/" + player.idJugador}
                        className="btn btn-danger"
                      >
                        Details
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }
}
