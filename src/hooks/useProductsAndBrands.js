import { useState, useEffect } from "react";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../const";

const useProductsAndBrands = () => {
    const [brands, setBrands] = useState(null);
  const [products, setProducts] = useState(null);

  const [brandsOriginal, setBrandsOriginal] = useState(null);
  const [productsOriginal, setProductsOriginal] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(`${REACT_APP_BASE_URL}/brands`);

        console.log(response.data);
        setBrandsOriginal(response.data);
        setBrands(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${REACT_APP_BASE_URL}/products`);

        console.log(response.data);
        setProductsOriginal(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBrands();
    fetchProducts();
  }, []);

  const [query, setQuery] = useState("");
  const [isSearchByBrand, setIsSearchByBrand] = useState(false);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleIsSearchByBrand = (value) => {
    setIsSearchByBrand(value);
  };


  console.log("query", query)


  useEffect(() => {
    if (query === "") {
      setBrands(brandsOriginal);
      setProducts(productsOriginal);
      return;
    }


    if (!isSearchByBrand) {
      const filteredProducts = productsOriginal.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setProducts(filteredProducts);
      return;
    }

    const filteredBrands = brandsOriginal.filter((brand) =>
      brand.name.toLowerCase().includes(query.toLowerCase())
    );
    setBrands(filteredBrands);
  }, [query, isSearchByBrand]);



  return {
    brands,
    products,
    query,
    isSearchByBrand,
    handleQueryChange,
    handleIsSearchByBrand,
  };
}



export default useProductsAndBrands