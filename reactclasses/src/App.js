import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Drawings from "./components/Drawings";
import DrawingsArray from "./components/DrawingsArray";
import Sports from "./components/Sports";
import Numbers from "./components/Numbers";
import Comics from "./components/Comics";

function App() {
  return (
    <div>
      <Comics/>
      {/* <Numbers />
      <Sports />
      <DrawingsArray />
      <Drawings />
      ------------------
      <Counter start="1" /> */}
    </div>
  );
}

export default App;
