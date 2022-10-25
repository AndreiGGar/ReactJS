import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class Old_Employers extends Component {
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
    var request = "api/Empleados/EmpleadosDepartamento/" + selectValue;
    axios.get(this.urlEmployers + request).then((response) => {
      this.setState({
        employers: response.data,
        status: true,
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
        status: true,
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
        {/* <select ref={this.selectMultiple}>
          {this.state.status == true &&
          this.state.departments.map((dept, index) => {
            return <option key={dept.Numero} value={dept.Numero}>
              {dept.Nombre}
            </option>
          })}
        </select> */}
        <select ref={this.selectMultiple}>{this.generateOptions()}</select>
        <br />
        <br />
        <form>
          <button onClick={this.showEmployers}>Show Employers</button>
        </form>
        <br />
        <ul style={{display: "inline-block"}}>
          {this.state.employers.map((employer, index) => {
            return <li key={index}>{employer.apellido}</li>;
          })}
        </ul>
      </div>
    );
  }
}
