import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";
import Brand from "./components/Brand/Brand";
import Section2 from "./components/Section2/Section2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section />
      <Main />
      <Products />
      <Brand/>
      <Section2/>
    </div>
  );
}

export default App;
