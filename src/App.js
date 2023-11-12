import React from "react";
import About from "./components/About/About";
import Arrow from "./components/Arrow/Arrow";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Project1 from "./components/Project1/Project1";
import Project2 from "./components/Project2/Project2";
import Project3 from "./components/Project3/Project3";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Homepage />
                <Arrow />
                <Footer />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
                <Arrow />
                <Footer />
              </>
            }
          />
          <Route
            path="/loreal-project"
            element={
              <>
                <Navbar />
                <Project1 />
                <Arrow />
                <Footer />
              </>
            }
          />
          <Route
            path="/pulsar-project"
            element={
              <>
                <Navbar />
                <Project2 />
                <Arrow />
                <Footer />
              </>
            }
          />
          <Route
            path="/hijabtale-project"
            element={
              <>
                <Navbar />
                <Project3 />
                <Arrow />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
