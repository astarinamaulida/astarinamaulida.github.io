import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Project from './components/Projects/Project';
import Navbar from './components/Nav/Navbar';
import React from 'react';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <React.Fragment>
      <Navbar />
    <div className="App">
      <div className="wrapper">
      <About />
      <Project />
      <Contacts />
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
