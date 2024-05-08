import { Link } from "react-router-dom";
import "./EachProduct.scss";
import useEachProduct from "../../hooks/useEachProduct";
import { useEffect } from "react";

function EachProduct({ eachProduct }) {
  const { isProductInCart, handleAddProductToCart, setProduct } = useEachProduct();
  
  useEffect(() => {
    setProduct(eachProduct);
  }
  , [eachProduct]);


  return (
    <div className="products__link">
      <Link
        to={`/product-details/${eachProduct.id}`}
      >
        <div className="products__item">
            <img src={eachProduct.image_url} alt="" className="products__item-img" />
          <p className="products__item-text" style={{ padding: "0 5px" }}>
            {eachProduct.name}
          </p>
          <p className="products__item-amount">
            <span style={{ fontWeight: "bold" }}>Price:</span>{" "}
            {eachProduct.price}
          </p>
        </div>
      </Link>

      {isProductInCart ? (
        <button
          className="products__item-btn-cart"
          onClick={() => handleAddProductToCart()}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="products__item-btn-cart"
          onClick={() => handleAddProductToCart()}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default EachProduct;
