import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";

export default class Employers extends Component {
  selectMultiple = React.createRef();
  urlDepartments = Global.urlDepartments;
  urlEmployers = Global.urlEmployers;
  state = {
    departments: [],
    employers: [],
    status: false,
  };

  showEmployers = (e) => {
    e.preventDefault();
    var selectValue = this.selectMultiple.current.value;
    console.log(selectValue)
    var request = "api/Empleados/EmpleadosDepartamento/" + selectValue;
    axios.get(this.urlEmployers + request).then((response) => {
      this.setState({
        employers: response.data,
        status: true
      });
    });
  };

  generateOptions = () => {
    var options = [];
    for (var department of this.state.departments) {
      options.push(
        <option key={department.Numero} value={department.Numero}>
          {department.Nombre}
        </option>
      );
    }
    return options;
  };

  showDepartments = () => {
    axios.get(this.urlDepartments).then((response) => {
      this.setState({
        departments: response.data,
        status: true
      });
    });
  };

  componentDidMount = () => {
    this.showDepartments();
  };

  render() {
    return (
      <div>
        <h3>Search Customer</h3>
        <select ref={this.selectMultiple}>
          {this.generateOptions()}
        </select>
        <br /><br />
        <form>
          <button onClick={this.showEmployers}>Show Employers</button>
        </form>
        <br />
        {this.state.employers.map((employer, index) => {
          return (
            <li key={index}>{employer.apellido}</li>
          );
        })}
        {/* <div>
          <table align="center">
            <tbody>
              {this.state.cars.map((car, index) => {
                return (
                  <tr key={car.idcoche}>
                    <td style={{ border: "1px solid black" }}>{car.marca}</td>
                    <td style={{ border: "1px solid black" }}>{car.modelo}</td>
                    <td style={{ border: "1px solid black" }}>
                      {car.conductor}
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      <img
                        src={car.imagen}
                        alt={car.imagen}
                        style={{ width: "250px", height: "150px" }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}
      </div>
    );
  }
}
