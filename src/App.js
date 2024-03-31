import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
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
      <Route path="/aboutus" element={<AboutUs />}/>
      <Route path="/contactus" element={<ContactUs />}/>
      <Route path="*" element={<NotFound />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product details/:id" element={<ProductDetails />} />
    </Routes>
    </BrowserRouter>
  
     
    
  );
}

export default App;
