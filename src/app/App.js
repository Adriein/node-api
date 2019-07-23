import React, { Component } from "react";

import MainContainer from "./main-components/MainContainer";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <MainContainer />
      </div>
    );
  }
}

export default App;
