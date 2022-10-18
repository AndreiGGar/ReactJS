import messiImg from './assets/images/messi.jpg';
import './App.css';
import SumNumbers from './components/SumNumbers';
import Son from './components/Son';
import Maths from './components/Maths';
import Counter from './components/Counter';

function App() {
  const exeParent = (desc) => {
    console.log("Id: " + desc)
  }
  const tripleParent = (number) => {
    console.log(number*3);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={messiImg} className="img" alt="img" style={{width: "600px", height: "450px"}}/>
        <SumNumbers number1="1" number2="2"/>
        <Son idSon="1" exeParent={exeParent}/>
        <Son idSon="2" exeParent={exeParent}/>
        <h2>Calculator</h2>
        <Maths number="4" tripleParent={tripleParent}/>
        <Counter/>
        {/* <br/>
        <button type="button" onClick={() => tripleParent(5)}>Triple</button> */}
      </header>
    </div>
  );
}

export default App;