import { Link } from "react-router-dom";
import "./EachProduct.scss";

function EachProduct({ eachProduct,src }) {
  return (
    <Link to={`/product-details/${eachProduct.id}`}>
      <div className="products__item">
        <img src={src} />
        <p className="products__item-text">{eachProduct.name}</p>
        <p className="products__item-amount">{eachProduct.price}</p>
        <p className="products__item-size">{eachProduct.sizes}</p>
        <p className="products__item-colors">{eachProduct.colors}</p>
        <p className="products__item-material">{eachProduct.material}</p>
      </div>
    </Link>
  );
}

export default EachProduct;
