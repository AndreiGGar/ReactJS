import { useState } from "react";

function Car(props) {
  const [status, setStatus] = useState(false);
  const [speed, setSpeed] = useState(0);

  var car = {
    brand: props.Brand,
    model: props.Model,
    gears: props.Gears,
    color: props.Color,
    speed: parseInt(props.Speed),
    acceleration: parseInt(props.Acceleration)
  }

  const checkStatus = () => {
    if (status === true) {
      return (<h3 style={{color: "purple"}}>Engine is started</h3>)
    } else {
      return (<h3 style={{color: "crimson"}}>Engine is stopped</h3>)
    }
  }

  const accelerate = () => {
    if (status === false) {
      alert ("Engine is stopped");
      setSpeed(0);
    } else {
      if (speed >= car.speed) {
        setSpeed(car.speed);
      } else {
        setSpeed(speed + car.acceleration);
      }
    }
  }

  return (<div>
    <h3>Component Car: {car.brand}, {car.model}</h3>
    <div>
      {checkStatus()}
    </div>
    <h3>Actual Speed {speed} km/h</h3>
    <button type="button" onClick= {()=> {
      setStatus(!status);
      console.log("Changing status");
    }}>Start/Stop</button>
    <button type="button" onClick= {()=> accelerate()}>Accelerate car</button>
  </div>)
}

export default Car;