import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { NavLink } from "react-router-dom";

export default class DetailsEmployers extends Component {
  state = {
    employers: [],
    status: false,
  };

  loadEmployers = () => {
    var request = "api/Empleados/" + this.props.number;
    var url = Global.urlEmployers + request;
    axios.get(url).then((response) => {
      this.setState({
        employers: response.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadEmployers();
  };
  
  render() {
    return (
      <div className="text-center mt-4">
        <h3>Details Employer &gt; {this.props.number}</h3>
        <h4 style={{ color: "cyan" }}>Surname: {this.state.employers.apellido}</h4>
        <h4 style={{ color: "orange" }}>Job: {this.state.employers.oficio}</h4>
        <h4 style={{ color: "lime" }}>Salary: {this.state.employers.salario}</h4>
        <h4 style={{ color: "brown" }}>Dept: {this.state.employers.departamento}</h4>
        
        <NavLink to={-1}>
          <button className="btn btn-primary">
            Go Back
          </button>
        </NavLink>
      </div>
    );
  }
}
