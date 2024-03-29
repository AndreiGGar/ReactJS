import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";
import axios from "axios";

export default class MenuDepts extends Component {
  state = {
    statusGet: false,
    depts: [],
  };

  loadDepts = () => {
    var request = "api/departamentos";
    var url = Global.urlDepts + request;
    axios.get(url).then((response) => {
      this.setState({
        depts: response.data,
        statusGet: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadDepts();
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-primary">
          <div className="container-fluid">
            <NavLink className="navbar-brand text-white" to="/">
              CRUD
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
                  <NavLink className="nav-link text-danger" to="/create">
                    Create Dept
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Depts
                  </a>

                  <ul className="dropdown-menu">
                    {this.state.depts.map((dept, index) => {
                      return (
                        <li key={dept.numero}>
                          <NavLink
                            to={"/employers/" + dept.numero}
                            className="dropdown-item"
                          >
                            {dept.nombre}
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
