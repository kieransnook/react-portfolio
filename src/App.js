import React from "react";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Project from "./components/Project/";
import About from "./components/About/";
import Contact from "./components/Contact/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
        <Route exact path="/" component={About} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;