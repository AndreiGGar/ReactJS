import logo from "./logo.svg";
import "./App.css";
import Customers from "./components/Customers";
import SearchCustomers from "./components/SearchCustomers";
import Cars from "./components/Cars";
import Employers from "./components/Employers";

function App() {
  return (
    <div className="App">
      <Employers />
      {/* <Cars /> */}
      {/* <SearchCustomers /> */}
      {/* <Customers /> */}
    </div>
  );
}

export default App;
