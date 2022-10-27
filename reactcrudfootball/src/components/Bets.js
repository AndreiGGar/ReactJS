import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { NavLink } from "react-router-dom";

export default class Bets extends Component {
  state = {
    bets: [],
    status: false,
  };

  loadBets = () => {
    var request = "api/Apuestas";
    var url = Global.urlApi + request;
    axios.get(url).then((response) => {
      this.setState({
        bets: response.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadBets();
  };

  render() {
    if (this.state.status == true) {
      return (
        <div>
          <h3 className="mt-4 mb-4">Bets</h3>
          <NavLink to="/bets/create">
            <button className="btn btn-danger">Create Bet</button>
          </NavLink>
          <h4 className="mt-4 mb-4" style={{ color: "crimson" }}>
            Home: Real Vardrid, Away: Patético de Madrid
          </h4>
          <table className="table table-bordered table-dark text-center">
            <thead>
              <tr>
                <th>User</th>
                <th>Result</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.bets.map((bet, index) => {
                return (
                  <tr key={bet.idApuesta}>
                    <td>{bet.usuario}</td>
                    <td>{bet.resultado}</td>
                    <td>{bet.fecha}</td>
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
