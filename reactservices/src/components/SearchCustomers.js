import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";

export default class SearchCustomers extends Component {
  boxIdRef = React.createRef();
  urlCustomers = Global.urlCustomers;
  state = {
    customer: {},
    status: false
  };

  searchCustomers = (e) => {
    e.preventDefault();
    var id = this.boxIdRef.current.value;
    var request = "customers/" + id + ".json";
    axios.get(this.urlCustomers + request).then((response) => {
      this.setState({
        customer: response.data.customer,
        status: true
      });
    });
  };

  // componentDidMount = () => {
  //   this.loadCustomers();
  // };

  render() {
    return (
      <div>
        <h3>Search Customer</h3>
        <form onSubmit={this.searchCustomers}>
          <input type="text" ref={this.boxIdRef} />
          <button type="submit">Search the customer</button>
        </form>
        <p>{Object.keys(this.state.customer).length > 0 && this.state.customer.contactName}</p>
      </div>
    );
  }
}
