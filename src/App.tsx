import React, { Component } from "react";
import "./App.css";
import { Navbar } from "./components/navbar";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
