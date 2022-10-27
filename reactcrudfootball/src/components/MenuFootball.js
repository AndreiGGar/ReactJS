import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";
import axios from "axios";
import Uefa from "../assets/images/uefa.png";

export default class MenuDepts extends Component {
  state = {
    statusGet: false,
    teams: [],
  };

  loadTeams = () => {
    var request = "api/Equipos";
    var url = Global.urlApi + request;
    axios.get(url).then((response) => {
      this.setState({
        teams: response.data,
        statusGet: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadTeams();
  };

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "lightgray" }}
        >
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img
                src={Uefa}
                alt="Uefa"
                style={{ width: "50px", height: "50px" }}
              />
              Champions League
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-warning"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-danger" to="/bets">
                    Bets
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Teams
                  </a>

                  <ul className="dropdown-menu">
                    {this.state.teams.map((team, index) => {
                      return (
                        <li key={team.idEquipo}>
                          <NavLink
                            to={"/teams/" + team.idEquipo}
                            className="dropdown-item"
                          >
                            {team.nombre}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
