import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Project from './components/Projects/Project';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <About />
      <Project />
      </div>
    </div>
  );
}

export default App;
