import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import Employers from "./Employers";

export default class Departments extends Component {
  selectMultiple = React.createRef();
  urlDepartments = Global.urlDepartments;
  urlEmployers = Global.urlEmployers;
  state = {
    departments: [],
    status: false,
    idDept: 0
  };

  showEmployers = (e) => {
    e.preventDefault();
    var selectValue = this.selectMultiple.current.value;
    this.setState({
      idDept: selectValue
    })
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
        <h3>Departments</h3>
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
        {
            this.state.idDept != 0 &&
            <Employers idDept={this.state.idDept}/>
          }
      </div>
    );
  }
}
