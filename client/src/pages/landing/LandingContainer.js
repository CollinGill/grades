import React, { Component } from "react";

// Components
import Header from "../../components/Header";
import AppDesc from "./AppDesc.js";

class LandingContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header text="grades" />
          <AppDesc />
        </div>
      </div>
    );
  }
}

export default LandingContainer;
