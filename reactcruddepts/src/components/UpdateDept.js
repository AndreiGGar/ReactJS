import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

export default class CreateDepts extends Component {
  boxNameRef = React.createRef();
  boxLocationRef = React.createRef();

  state = {
    statusUpd: false,
    statusGet: false,
    depts: [],
  };

  loadDepts = () => {
    var request = "api/departamentos/" + this.props.number;
    var url = Global.urlDepts + request;
    axios.get(url).then((response) => {
      this.setState({
        depts: response.data,
        statusGet: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadDepts();
  };

  updateDept = (e) => {
    e.preventDefault();
    var number = parseInt(this.props.number);
    var name = this.boxNameRef.current.value;
    var location = this.boxLocationRef.current.value;
    var request = "api/departamentos";
    var url = Global.urlDepts + request;
    // var name = this.boxNameRef.current.value;
    // var location = this.boxLocationRef.current.value;

    var obj = {
      numero: number,
      nombre: name,
      localidad: location,
    };

    console.log(obj);

    axios.put(url, obj).then((response) => {
      Swal.fire({
        icon: "success",
        title: "Success!",
      });
      this.setState({
        statusUpd: true,
      });
    });
  };

  // changeInput = (event) => {
  //   if (event.target.name == "name") {
  //     this.state.depts.nombre = event.target.value;
  //   } else if (event.target.name == "location") {
  //     this.state.depts.localidad = event.target.value;
  //   }
  //   this.setState({
  //     depts: this.state.depts
  //   })
  // }

  render() {
    if (this.state.statusUpd == true) {
      return <Navigate to="/" />;
    }
    return (
      <div>
        <h3>Update Dept</h3>
        {this.state.statusGet == true && (
          <form onSubmit={this.updateDept}>
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              ref={this.boxNameRef}
              defaultValue={this.state.depts.nombre}
              name="name"
              // onChange={this.changeInput}
              required
            ></input>
            <br />
            <label>Location: </label>
            <input
              type="text"
              className="form-control"
              ref={this.boxLocationRef}
              defaultValue={this.state.depts.localidad}
              name="location"
              // onChange={this.changeInput}
              required
            ></input>
            <br />
            <button className="btn btn-danger">Update Dept</button>
          </form>
        )}
        <br />
        <h2 style={{ color: "purple" }}>{this.state.message}</h2>
      </div>
    );
  }
}
