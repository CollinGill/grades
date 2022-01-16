import "./App.css";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

// pages
import LandingContainer from "./pages/landing/LandingContainer";
import About from "./pages/about/About";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" element={<LandingContainer />} />
                <Route path="/about" element={<About />} />
            </Switch>
        </Router>
    );
};

export default App;