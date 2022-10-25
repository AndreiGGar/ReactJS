import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class RoutesMenu extends Component {

  render() {
    return (
      <div>
        <ul style={{ display: "inline-block" }}>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/table/5">TABLE 5</NavLink>
          </li>
          <li>
            <NavLink to="/table/7">TABLE 7</NavLink>
          </li>
          <li>
            <NavLink to="/xd">NO ROUTE</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
