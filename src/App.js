import React from "react";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Project from "./components/Project/index";
import About from "./components/About/index";
import Contact from "./components/Contact/index";
import { BrowserRouter as Router, Route,  } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Route exact path="/" component={About} />
        <Route path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
        
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;