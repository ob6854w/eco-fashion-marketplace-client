import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
    </div>
  );
}

export default App;
