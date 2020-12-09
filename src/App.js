import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Contact />
      
      </Router>
    </div>
  );
}

export default App;
