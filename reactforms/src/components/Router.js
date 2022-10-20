import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Music from "./Music";
import Cinema from "./Cinema";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/music" element={<Music/>} />
          <Route path="/cinema" element={<Cinema/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
