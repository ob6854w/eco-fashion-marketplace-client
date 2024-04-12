import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import EachBrandProduct from "../../components/EachBrandProduct/EachBrandProduct";
import img from "../../assets/images/brand4.png";
import avt from "../../assets/images/founder1.png";
import { REACT_APP_BASE_URL } from "../../const";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { useEffect, useState } from "react";
import "./MarketPlace.scss";

const MarketPlace = () => {
  const [activeTab, setActiveTab] = useState(true);
  const [brands, setBrands] = useState(null);
  const [products, setProducts] = useState(null);
  const [tab1, setTab1] = useState("brands")

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
      <div className="search2">
        <div className="search2_cont">
          <div className="search2__container">
            <h1 className="search2__headtext">Browse Marketplace</h1>
            <p className="search2__text">
              Browse through more than 50k brands on the Fashion Marketplace.
            </p>
          </div>
          <div className="search2__wrapper">
            <input type="text" placeholder="Search your favourite brands" />
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
            num="302"
            onClick={() => {
              setActiveTab(!activeTab);
              setTab1(!tab1);
            }}
            activeTab={activeTab}
            tab1={tab1}
          />
          <Tab
            tabTitle="Products"
            num="67"
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
        {tab1 ? brands?.map((eachBrand) => {
          console.log(eachBrand)
            return (
              <EachBrandProduct
              eachBrand={eachBrand}
                img={img}
                img2={avt}
                avatarName=""
                price="$50"
                className="each__brand"
              />
            );
          }) : products?.map((eachProduct) => {
            console.log(eachProduct)
            return (
              <EachBrandProduct
              eachProduct={eachProduct}
                img={img}
                img2={avt}
                avatarName=""
                price="$50"
                className="each__brand"
              />
            );
          }) }  
          {/* <EachBrandProduct
            img={img}
            img2={avt}
            avatarName=""
            price="$50"
            className="each__brand"
          />
          <EachBrandProduct
            img={img}
            img2={avt}
            avatarName=""
            price="$50"
            className="each__brand"
          />
          <EachBrandProduct
            img={img}
            img2={avt}
            avatarName=""
            price="$50"
            className="each__brand"
          />
          <EachBrandProduct
            img={img}
            img2={avt}
            avatarName=""
            price="$50"
            className="each__brand"
          />
          <EachBrandProduct
            img={img}
            img2={avt}
            avatarName=""
            price="$50"
            className="each__brand"
          />
          <EachBrandProduct
            img={img}
            img2={avt}
            avatarName=""
            price="$50"
            className="each__brand"
          />
          <EachBrandProduct
            img={img}
            img2={avt}
            avatarName=""
            price="$50"
            className="each__brand"
          />
          <EachBrandProduct
            img={img}
            img2={avt}
            avatarName=""
            price="$50"
            className="each__brand"
          />
          <EachBrandProduct
            img={img}
            img2={avt}
            avatarName=""
            price="$50"
            className="each__brand"
          />
          <EachBrandProduct
            img={img}
            img2={avt}
            avatarName=""
            price="$50"
            className="each__brand"
          />
          <EachBrandProduct
            img={img}
            img2={avt}
            avatarName=""
            price="$50"
            className="each__brand"
          />
          <EachBrandProduct
            img={img}
            img2={avt}
            avatarName=""
            price="$50"
            className="each__brand"
          /> */}
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
