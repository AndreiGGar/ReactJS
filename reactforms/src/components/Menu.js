import React, { Component } from "react"

export default class Menu extends Component {
  render() {
    return (
      <div>
        <ul style={{ display: "inline" }}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/cinema">Cine</a>
          </li>
          <li>
            <a href="/music">Música</a>
          </li>
        </ul>
      </div>
    )
  }
}