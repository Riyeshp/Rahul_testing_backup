import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Topbar from "./Components/Topbar";
import Main from "./Components/Main";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Main />
      </div>
    );
  }
}

export default App;
