import React from "react";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes, Link } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import "./App.css";
import Work from "./components/Work/Work";

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
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
