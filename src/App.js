import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import wands from "./wands";
import WandsList from "./WandsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="content m-5">
            <WandsList wands={wands} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
