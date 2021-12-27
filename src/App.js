import React from "react";
import "./App.css";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Navbar from "./components/Nav/Navbar";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <div className="wrapper">
          <About />
          <Project />
          <Skills />
          <Contacts />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
