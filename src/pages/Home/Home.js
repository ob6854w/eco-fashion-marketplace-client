import { REACT_APP_BASE_URL } from "../../const";
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
import { Link } from "react-router-dom";

function Home() {
  const [brands, setBrands] = useState(null);
  const [products, setProducts] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = async (productId) => {
    const token = localStorage.getItem('token'); // Retrieve token from local storage

    if (!token) {
      // Redirect to login page if user is not logged in
     <Link to="/login"/>
      return;
    }

    try {
      const response = await fetch('/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({ productId })
      });

      if (response.ok) {
        // Product successfully added to cart
      } else {
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(`${REACT_APP_BASE_URL}/brands`);

        console.log(response.data);
        setBrands(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${REACT_APP_BASE_URL}/products`);

        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBrands();
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <Section />
      <Main />
      <Products products={products} />
      <Brand brands={brands} />
      <Section2 />
    </>
  );
}

export default Home;
