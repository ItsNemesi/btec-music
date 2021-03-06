import './styles/index.css';

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

//Components
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </Switch>
    </Router>


  );
}

export default App;
