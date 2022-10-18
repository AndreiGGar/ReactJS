// import React, { useState } from 'react';
// function SumInputs () {
//   var result = 0;
//   const [n1, setn1] = useState(0);
//   const [n2, setn2] = useState(0);

//   const calculator = () => {
//     this.setState ({
//       result: parseInt(this.state.n1, 10) + parseInt(this.state.n2, 10)
//     })
//   }

//   return (
//   <div>
//   <br/>
//   <label>First Number: </label><input type="text" id="input1" onchange={(e)=>this.setState({n1:e.target.value})}/>
//   <br/><br/>
//   <label>Second Number: </label><input type="text" id="input2" onchange={(e)=>this.setState({n2:e.target.value})}/>
//   <br/><br/>
//   <button type="button" onclick={calculator()}>Get Result</button>
//   <h2>{this.state.result}</h2>
//   </div>);
// }

// export default SumInputs;