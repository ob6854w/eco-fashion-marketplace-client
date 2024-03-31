// import { REACT_APP_BASE_URL } from "../../consts";
import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Main from "../../components/Main/Main";
import Products from "../../components/Products/Products";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Brand from "../../components/Brand/Brand";
import Section2 from "../../components/Section2/Section2";
import Footer from "../../components/Footer/Footer";


function Home() {
    
    return (
      <>
      <Hero />
      <Section />
      <Main />
      <Products />
      <Brand/>
      <Section2/>
      <Footer/> 
      </>
    );
  }
  
  export default Home;
  