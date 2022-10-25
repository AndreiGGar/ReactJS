import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class RoutesMenu extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light mb-4">
          <div className="container-fluid">
            <NavLink to="/" className="nav-link active">
              HOME
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <NavLink to="/collatz/7" className="nav-link">
                    TABLE 7
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/collatz/11" className="nav-link">
                    TABLE 11
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/xd" className="nav-link">
                    NO ROUTE
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
