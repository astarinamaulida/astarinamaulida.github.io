import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <Homepage />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
