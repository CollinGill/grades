import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import "./App.css";

// pages
import LandingContainer from "./pages/landing/LandingContainer";
import About from "./pages/about/About";
import LoginContainer from "./pages/login/LoginContainer";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" element={<LandingContainer />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<LoginContainer />} />
            </Switch>
        </Router>
    );
};

export default App;