import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import Home from "./components/ParamsRoutes/Home";
import PageNotFound from "./components/ParamsRoutes/PageNotFound";
import Collatz from "./components/ParamsRoutes/Collatz";
import RoutesMenu from "./components/ParamsRoutes/RoutesMenu";

export default class Router extends Component {
  render() {
    function CollatzElements() {
      var { collatzNumber } = useParams();
      return <Collatz Number={collatzNumber} />;
    }

    return (
      <BrowserRouter>
        <RoutesMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/collatz/:collatzNumber"
            element={<CollatzElements />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
