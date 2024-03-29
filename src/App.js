import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section />
      <Main />
      <Products />
    </div>
  );
}

export default App;
