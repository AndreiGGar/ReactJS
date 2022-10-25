import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import Home from "./components/ParamsRoutes/Home";
import PageNotFound from "./components/ParamsRoutes/PageNotFound";
import MultiplicationTable from "./components/ParamsRoutes/MultiplicationTable";
import RoutesMenu from "./components/ParamsRoutes/RoutesMenu";

export default class Router extends Component {
  render() {
    function TableMultiplicationElements() {
      var { tableNumber } = useParams();
      return <MultiplicationTable Number={tableNumber} />;
    }

    return (
      <BrowserRouter>
        <RoutesMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/table/:tableNumber"
            element={<TableMultiplicationElements />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
