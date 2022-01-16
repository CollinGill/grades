import React, { Component } from "react";
import Header from "../../components/Header.js";
import AppDesc from "./AppDesc.js";

class LandingContainer extends Component {
    render () {
        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <AppDesc />
                </div>
            </div>
        );
    }
}

export default LandingContainer;