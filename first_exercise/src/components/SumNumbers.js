function SumNumbers (props) {
  const numbers = function(n1, n2) {
    n1 = parseInt(props.number1);
    n2 = parseInt(props.number2)
    console.log(n1);
    console.log(n2);
    var sum = n1 + n2;
    console.log("Result: " + sum);
  }

  return (
  <div>
  <br/>
  {/* <button type="button" onClick={() => numbers(5, 5)}>Get Result</button> */}
  <button type="button" onClick={() => numbers()}>Get Result</button>
  </div>);
}

export default SumNumbers;
// function SumNumbers () {
  
//   var n1 = document.getElementById("#input1").value;
//   var n2 = document.getElementById("#input2").value;
//   const numbers = function(n1, n2) {
//     console.log(n1);
//     console.log(n2);
//     var Sum = n1 + n2;
//     console.log("Result: " + Sum);
//   }

//   return (
//   <div>
//   <br/>
//   <label>First Number: </label><input type="text" id="input1"/>
//   <br/><br/>
//   <label>Second Number: </label><input type="text" id="input2"/>
//   <br/><br/>
//   <button type="button" onClick={() => numbers()}>Get Result</button>
//   </div>);
// }

// export default SumNumbers;