import React from "react";
import "./App.css";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Navbar from "./components/Nav/Navbar";
import Connect from "./components/Connect/Connect";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/Resume";
import Skills from "./components/Skills/Skills";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { styled } from '@mui/styles';
import { bounce } from 'react-animations';

function App() {
  // const DoubleArrow = styled(KeyboardDoubleArrowUpIcon)({
  //   color: "#cbacac",
  //   animation: "scrollBaby 80s linear infinite",
  //   bounce: {
  //     animationName: bounce,
  //   }
  // })

  return (
    <React.Fragment>
      <Navbar />
      {/* <DoubleArrow sx={{ fontSize: 50 }} color= "#cbacac" /> */}
      <div className="App">
        <div className="wrapper">
          <About />
          <Project />
          <Skills />
          <Connect />
          <Resume />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
