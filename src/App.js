import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="*" element={<NotFound />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product details/:id" element={<ProductDetails />} />
    </Routes>
    </BrowserRouter>
  
     
    
  );
}

export default App;
