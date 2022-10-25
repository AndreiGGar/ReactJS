import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class Customers extends Component {
  urlCustomers = Global.urlCustomers;
  state = {
    customers: [],
  };

  loadCustomers = () => {
    var request = "customers.json"
    axios.get(this.urlCustomers + request).then((response) => {
      this.setState({
        customers: response.data.results,
      });
    });
  };

  componentDidMount = () => {
    this.loadCustomers();
  };

  render() {
    return (
      <div>
        <h3>Services Customers</h3>
        {this.state.customers.map((customer, index) => {
          return (
            <p key={customer.id} style={{ color: "limegreen" }}>
              {customer.contactName}
            </p>
          );
        })}
      </div>
    );
  }
}
