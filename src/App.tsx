import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import {} from "./components/nav";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
