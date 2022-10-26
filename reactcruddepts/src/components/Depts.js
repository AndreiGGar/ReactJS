import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { NavLink } from "react-router-dom";
import loading from "../assets/images/loading.gif";

export default class Depts extends Component {
  state = {
    depts: [],
    status: false,
  };

  loadDepts = () => {
    var request = "api/departamentos";
    var url = Global.urlDepts + request;
    axios.get(url).then((response) => {
      this.setState({
        depts: response.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadDepts();
  };

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
                <th>Number</th>
                <th>Name</th>
                <th>Location</th>
                <th>More Details</th>
                <th>Delete Dept</th>
                <th>Update Dept</th>
              </tr>
            </thead>
            <tbody>
              {this.state.depts.map((dept, index) => {
                return (
                  <tr key={dept.numero}>
                    <td>{dept.numero}</td>
                    <td>{dept.nombre}</td>
                    <td>{dept.localidad}</td>
                    <td>
                      <NavLink
                        to={
                          "/details/" +
                          dept.numero +
                          "/" +
                          dept.nombre +
                          "/" +
                          dept.localidad
                        }
                        className="btn btn-success"
                      >
                        Details
                      </NavLink>
                    </td>
                    <td>
                      <NavLink
                        to={
                          "/delete/" +
                          dept.numero
                        }
                        className="btn btn-danger"
                      >
                        Delete
                      </NavLink>
                    </td>
                    <td>
                      <NavLink
                        to={
                          "/update/" +
                          dept.numero
                        }
                        className="btn btn-warning"
                      >
                        Update
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
