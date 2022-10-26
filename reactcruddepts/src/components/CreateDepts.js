import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import {Navigate} from 'react-router-dom'

export default class CreateDepts extends Component {
  boxNumberRef = React.createRef();
  boxNameRef = React.createRef();
  boxLocationRef = React.createRef();

  state = {
    message: "",
    status: false,
  };

  insertDept = (e) => {
    e.preventDefault();
    var request = "api/departamentos"
    var url = Global.urlDepts + request;
    var number = parseInt(this.boxNumberRef.current.value);
    var name = this.boxNameRef.current.value;
    var location = this.boxLocationRef.current.value;
    
    var obj = {
      numero: number,
      nombre: name,
      localidad: location
    }

    console.log(obj)


    axios.post(url, obj).then((response) => {
    console.log(response)
      this.setState({
        message: "Inserted dept",
        status: true,
      });
    });
  };

  render() {
    if (this.state.status == true) {
      return (
        <Navigate to="/"/>
      )
    }
    return (
      <div>
        <h3>CreateDepts</h3>
        <form onSubmit={this.insertDept}>
          <label>Number: </label>
          <input type="number" className="form-control" ref={this.boxNumberRef} required></input><br/>
          <label>Name: </label>
          <input type="text" className="form-control" ref={this.boxNameRef} required></input><br/>
          <label>Location: </label>
          <input type="text" className="form-control" ref={this.boxLocationRef} required></input><br/>
          <button className="btn btn-danger">Add Dept</button>
        </form><br/>
        <h2 style={{color: "purple"}}>
          {this.state.message}
        </h2>
      </div>
    );
  }
}
