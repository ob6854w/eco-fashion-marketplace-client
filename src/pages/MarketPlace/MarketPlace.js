import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import "./MarketPlace.scss";
import useProductsAndBrands from "../../hooks/useProductsAndBrands";
import Products from "../../components/Products/Products";
import Brand from "../../components/Brand/Brand";

const MarketPlace = () => {
  const [activeTab, setActiveTab] = useState(true);
  const [tab1, setTab1] = useState("brands")

  const { products, brands,
    query,
    handleQueryChange,
    handleIsSearchByBrand
  } = useProductsAndBrands();


  useEffect(() => {
    handleIsSearchByBrand(tab1 ? true : false);
  }, [tab1]);
  

  
  return (
    <>
      <div className="search2">
        <div className="search2_cont">
          <div className="search2__container">
            <h1 className="search2__headtext">Browse Marketplace</h1>
            <p className="search2__text">
              Browse through more than 50k brands on the Fashion Marketplace.
            </p>
          </div>
          <div className="search2__wrapper">
            <input type="text" placeholder={ `Search your favourite ${tab1 ? "brands" : "products"}` }
              value={query}
              onChange={handleQueryChange}
            />
            
            <Button className="search2__btn">
              <CiSearch className="search2__icon" />
            </Button>
          </div>
        </div>
      </div>
      <div className="search2__tab">
        <div className="search2__tab-wrapper">
          <Tab
            tabTitle="Brands"
            num={brands?.length}
            onClick={() => {
              setActiveTab(!activeTab);
              setTab1(!tab1);
            }}
            activeTab={activeTab}
            tab1={tab1}
          />
          <Tab
            tabTitle="Products"
            num={products?.length}
            onClick={() => {
              setActiveTab(!activeTab);
              setTab1(!tab1);
            }}
            activeTab={!activeTab}
            tab1={!tab1}
          />
        </div>
      </div>
      <div className="search2__brand_product">
        <div className="search2__brand_product-wrapper">
          {tab1 ? <Brand brands={brands} /> : <Products products={products} isFull />}
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
