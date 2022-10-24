import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";

export default class Cars extends Component {
  boxBrandRef = React.createRef();
  urlCars = Global.urlCars;
  state = {
    cars: [],
    status: false,
  };

  searchCars = (e) => {
    e.preventDefault();
    var cars = this.state.cars;
    var brand = this.boxBrandRef.current.value;
    // for (var car of cars) {
    //   if (car.marca == brand) {
    //     this.setState ({
    //       car: this.state.car
    //     })
    //   }
    // }
    var carsFilter = cars.filter(car => car.marca.toLowerCase().includes(brand))
    this.setState ({
      cars: carsFilter
    })
    // for (var i = 0; i < cars.length; i++) {
    //   var car = cars[i].marca;
    //   console.log(brand + " " + car)
    //   if (brand == car) {
    //     this.setState ({
    //       cars: this.state.cars[i]
    //     })
    //   }
    // }
    // console.log(this.state.cars)
  };

  loadCars = (e) => {
    if (e != null) {
      e.preventDefault();
    }
    var request = "webresources/coches";
    axios.get(this.urlCars + request).then((response) => {
      this.setState({
        cars: response.data,
        status: true
      });
    });
  };

  componentDidMount = () => {
    this.loadCars();
  };

  render() {
    return (
      <div>
        <h3>Search Customer</h3>
        <form>
          <input type="text" ref={this.boxBrandRef} />
          <button onClick={this.searchCars}>Search the car</button>
          <button onClick={this.loadCars}>Search all cars</button>
        </form>
        <br />
        <div>
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
        </div>
        {/* <p>{Object.keys(this.state.customer).length > 0 && this.state.customer.contactName}</p> */}
      </div>
    );
  }
}
