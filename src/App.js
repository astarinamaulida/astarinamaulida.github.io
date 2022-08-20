import React from "react";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Navbar from "./components/Navbar/Navbar";
import Connect from "./components/Connect/Connect";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <About />
        <Project />
        <Skills />
        <Connect />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
