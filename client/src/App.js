import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

import "./App.css";
import Navbar from "./components/navbar/Navbar";

// pages
import LandingContainer from "./pages/landing/LandingContainer";
import About from "./pages/about/About";
import LoginContainer from "./pages/login/LoginContainer";
import RegisterContainer from "./pages/register/RegisterContainer";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" element={<LandingContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
};

export default App;
