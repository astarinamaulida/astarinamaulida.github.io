import React from "react";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes, Link } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import "./App.css";
import Work from "./components/Work/Work";
import Project1 from "./components/Project1/Project1";
import Project2 from "./components/Project2/Project2";
import Project3 from "./components/Project3/Project3";

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
                <Footer />
              </>
            }
          />
          <Route
            path="/work"
            element={
              <>
                <Navbar />
                <Work />
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
