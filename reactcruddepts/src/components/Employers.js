import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { NavLink } from "react-router-dom";
import loading from "../assets/images/loading.gif";

export default class Employers extends Component {
  state = {
    employers: [],
    status: false,
  };

  loadEmployers = () => {
    var request = "api/Empleados/EmpleadosDepartamento/" + this.props.number;
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

  componentDidUpdate = (oldProps) => {
    if (this.props.number != oldProps.number) {
      this.loadEmployers();
    }
  }

  render() {
    if (this.state.status == false) {
      return (
        <div className="text-center">
          <img
            src={loading}
            alt={loading}
            className="w-100"
            style={{ height: "1000px" }}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h3 className="mt-4 mb-4">Depts</h3>
          <table className="table table-bordered table-dark text-center">
            <thead>
              <tr>
                <th>Employer ID</th>
                <th>Surname</th>
                <th>Job</th>
                <th>Salary</th>
                <th>More Details</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employers.map((employ, index) => {
                return (
                  <tr key={employ.idEmpleado}>
                    <td>{employ.apellido}</td>
                    <td>{employ.oficio}</td>
                    <td>{employ.salario}</td>
                    <td>{employ.departamento}</td>
                    <td>
                      <NavLink
                        to={
                          "/employers/details/" +
                          employ.idEmpleado
                        }
                        className="btn btn-success"
                      >
                        Details
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }
}
