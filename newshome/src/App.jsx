import { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
