import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class Employers extends Component {
  selectMultiple = React.createRef();
  urlDepartments = Global.urlDepartments;
  urlEmployers = Global.urlEmployers;
  state = {
    employers: [],
    status: false,
  };

  loadEmployers = () => {
    var idDept = this.props.idDept;
    var request = "api/Empleados/EmpleadosDepartamento/" + idDept;
    axios.get(this.urlEmployers + request).then((response) => {
      this.setState({
        employers: response.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    // this.loadEmployers();
  }

  componentDidUpdate = (oldProps) => {
    if (this.props.idDept != oldProps.idDept) {
      this.loadEmployers();
    }
  }

  render() {
    return (
      <div>
        <h4>
          <ul style={{ display: "inline-block" }}>
            {this.state.status == true &&
              this.state.employers.map((employer, index) => {
                return <li key={index}>{employer.apellido}, {employer.oficio}</li>;
              })}
          </ul>
        </h4>
      </div>
    );
  }
}
