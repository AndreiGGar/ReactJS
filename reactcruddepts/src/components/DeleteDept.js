import React, { Component } from "react";
import axios from "axios";
import Global from "../Global"
import {Navigate} from 'react-router-dom'

export default class DeleteDept extends Component {
  state = {
    status: false
  }
  deleteDept = (e) => {
    e.preventDefault();
    var request = "api/departamentos"
    var url = Global.urlDepts + request;
    var number = parseInt(this.props.number);
    
    var obj = {
      numero: number
    }

    axios.delete(url + "/" + number, obj).then((response) => {
    console.log(response)
      this.setState({
        status: true
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
        <h3>
          Delete Dept: <span>{this.props.number}?</span>
        </h3>
        <form onSubmit={this.deleteDept}>
          <button className="btn btn-danger">Delete</button>
        </form>
      </div>
    );
  }
}
