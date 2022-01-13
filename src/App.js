import React from "react";
import "./App.css";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Navbar from "./components/Nav/Navbar";
import Connect from "./components/Connect/Connect";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <KeyboardDoubleArrowUpIcon/>
      <div className="App">
        <div className="wrapper">
          <About />
          <Project />
          <Skills />
          <Connect />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
