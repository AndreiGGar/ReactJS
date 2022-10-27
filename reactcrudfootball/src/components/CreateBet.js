import React, { Component } from 'react'
import axios from "axios";
import Global from "../Global";
import {Navigate} from 'react-router-dom'

export default class CreateBet extends Component {
  boxUserRef = React.createRef();
  boxRealMRef = React.createRef();
  boxAtletiMRef = React.createRef();
  boxDateRef = React.createRef();

  state = {
    message: "",
    status: false,
  };
  

  insertDept = (e) => {
    e.preventDefault();
    var request = "api/Apuestas"
    var url = Global.urlApi + request;
    var user = this.boxUserRef.current.value;
    var team1 = this.boxTeam1.current.value;
    var team2 = this.boxTeam2.current.value;
    var date = this.boxDateRef.current.value;
    var result = team1 + " - " + team2;
    
    var obj = {
      usuario: user,
      resultado: result,
      fecha: date
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
        <Navigate to="/bets"/>
      )
    }
    return (
      <div>
        <h3>CreateDepts</h3>
        <form onSubmit={this.insertDept}>
          <label>User: </label>
          <input type="text" className="form-control" ref={this.boxUserRef} required></input><br/>
          <label>Team 1: </label>
          <input type="text" className="form-control" ref={this.boxTeam1} required></input><br/>
          <label>Team 2: </label>
          <input type="text" className="form-control" ref={this.boxTeam2} required></input><br/>
          <label>Date: </label>
          <input type="text" className="form-control" ref={this.boxDateRef} required></input><br/>
          <button className="btn btn-danger">Add Dept</button>
        </form><br/>
        <h2 style={{color: "purple"}}>
          {this.state.message}
        </h2>
      </div>
    );
  }
}
