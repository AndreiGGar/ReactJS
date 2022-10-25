import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js"
import "bootstrap/dist/js/bootstrap.bundle"

import logo from "./logo.svg";
import "./App.css";
import Customers from "./components/Customers";
import SearchCustomers from "./components/SearchCustomers";
import Cars from "./components/Cars";
import Old_Employers from "./components/Old_Employers";
import Employers from "./components/Employers";
import Departments from "./components/Departments";
import MultiplicationTable from "./components/ParamsRoutes/MultiplicationTable";
import Router from "./router";

function App() {
  return (
    <div className="App">
      <Router/>
      {/* <MultiplicationTable Number="4"/>
      <MultiplicationTable Number="8"/> */}
      {/* <Departments/> */}
      {/* <Employers /> */}
      {/* <Cars /> */}
      {/* <SearchCustomers /> */}
      {/* <Customers /> */}
    </div>
  );
}

export default App;
