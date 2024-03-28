import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Section/>
    </div>
  );
}

export default App;
