import React from "react";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <About />
        <Project />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
