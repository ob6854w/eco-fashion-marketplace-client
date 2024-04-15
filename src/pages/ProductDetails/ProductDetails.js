import img1 from "../../assets/images/img_1.png";
import Button from "../../components/Button/Button";
import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../const";
import formatToCurrency from "../../utils/formatToCurrency";
import useEachProduct from "../../hooks/useEachProduct";
import Ratings from "../../components/Ratings/Ratings";

const TABS = [
  {
    id: 1,
    title: "Description",
  },
  {
    id: 2,
    title: "Reviews",
  },
];

const BrandDetails = () => {
  const { id } = useParams();
  const {
    isProductInCart,
    handleAddProductToCart,
    setProduct: handleSetCartItemProduct,
  } = useEachProduct();

  const [productData, setProductData] = useState({
    data: null,
    isLoading: false,
    error: null,
  });
  const [reviewData, setReviewData] = useState({
    data: null,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    const getProduct = async () => {
      try {
        setProductData({ data: null, isLoading: true, error: null });
        const result = await axios.get(`${REACT_APP_BASE_URL}/products/${id}`);

        setProductData({ data: result.data, isLoading: false, error: null });
        handleSetCartItemProduct(result.data);
      } catch (error) {
        console.log(error);
        setProductData({ data: null, isLoading: false, error: error.message });
      }
    };

    getProduct();
  }, [id]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setReviewData({ data: null, isLoading: true, error: null });
        const result = await axios.get(`${REACT_APP_BASE_URL}/reviews/${id}`);

        setReviewData({ data: result.data, isLoading: false, error: null });
      } catch (error) {
        console.log(error);
        setReviewData({ data: null, isLoading: false, error: error.message });
      }
    };

    getReviews();
  }, [id]);

  const {
    data: product,
    isLoading: productIsLoading,
    error: productError,
  } = productData;

  const {
    data: reviews,
    isLoading: reviewIsLoading,
    error: reviewError,
  } = reviewData;

  const [activeTabId, setActiveTabId] = useState(1);

  const handleTabClick = (tabId) => {
    setActiveTabId(tabId);
  };

  if (productIsLoading || reviewIsLoading) {
    return <div
    className="brand__details-loader-or-error"
    >Loading...</div>;
  }

  if (productError || reviewError) {
    return <div
    className="brand__details-loader-or-error"
    > Something went wrong: {productError || reviewError}</div>;
  }

  console.log(reviews);

  const ratingsAverage = !reviews?.length
    ? 0 : (
    reviews?.reduce((acc, review) => {
      return acc + parseFloat(review.rating);
    }, 0) / reviews?.length
  ).toPrecision(2)

  

  return (

    <>
      {product && (
        <div className="brand__details">
          <div className="brand__details-image">
            <img src={product.image_url} alt="" />
          </div>
          <div className="brand__details-wrapper">
            <div className="brand__details-text">
              <h2>{product.name.toUpperCase()}</h2>
              <a
                href={product.brand_website_url}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{product.brand_name}</h3>
              </a>
              <div className="brand__details-stars">
              
                <Ratings rating={ratingsAverage} />
                <span>({ratingsAverage})</span>
              </div>
              <p>
                <span className="fprice">
                  {formatToCurrency(Math.floor(product.price * 1.2))}
                </span>{" "}
                <span className="nprice">
                  {formatToCurrency(+product.price)}
                </span>
              </p>
              <p className="products__item-category">
                <span style={{ fontWeight: "bold" }}>Category:</span>{" "}
                {product.category}
              </p>
              <p className="products__item-size">
                <span style={{ fontWeight: "bold" }}>Sizes:</span>{" "}
                {product.sizes}
              </p>
              <p className="products__item-colors">
                <span style={{ fontWeight: "bold" }}>Variants:</span>{" "}
                {product.colors}
              </p>
              <p className="products__item-material">
                <span style={{ fontWeight: "bold" }}>Material:</span>{" "}
                {product.material}
              </p>
              {isProductInCart ? (
                <Button
                  className="brand__details-btn"
                  onClick={() => handleAddProductToCart()}
                >
                  REMOVE TO CART
                </Button>
              ) : (
                <Button
                  className="brand__details-btn"
                  onClick={() => handleAddProductToCart()}
                >
                  ADD TO CART
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {product && reviews && (
        <div className="brand__details-container">
          <div className="brand__details-btn1-wrapper">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`brand__details-btn1 ${
                  activeTabId === tab.id ? "brand__details-btn1--active" : ""
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {activeTabId === 1 ? (
            <div className="brand__details-description">
              <p>
                <b>{product.description}</b>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                fringilla augue nec est tristique auctor. Donec non est at
                libero
              </p>
              <p>
                Nam fringilla tristique auctor. Donec non est at libero. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ) : (
            <div className="brand__details-reviews">
              {reviews.map((review) => (
                <div key={review.id} className="brand__details-review">
                  <div className="brand__details-review-top">
                    <h3>{review.name}</h3>
                    <div className="brand__details-stars">
                      <Ratings rating={review.rating} /> &nbsp;
                      {review.rating}
                    </div>
                  </div>
                  <p className="brand__details-review-bottom">
                    {review.comment}
                  </p>
                  <p className="brand__details-review-date">
                    {new Date(review.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BrandDetails;
