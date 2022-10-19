import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Drawings from "./components/Drawings";
import DrawingsArray from "./components/DrawingsArray";
import Sports from "./components/Sports";

function App() {
  return (
    <div>
      <Sports />
      <DrawingsArray />
      <Drawings />
      ------------------
      <Counter start="1" />
    </div>
  );
}

export default App;
