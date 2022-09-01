import React from "react";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import "./App.css";
import Wireframe from "./components/Wireframe/Wireframe";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <About />
        <Project />
        <Wireframe />
        <Skills />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
