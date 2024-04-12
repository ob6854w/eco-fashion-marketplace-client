// import { Link } from "react-router-dom";
// import "./EachProduct.scss";

// function EachProduct({ eachProduct }) {
//   return (
//     <Link to={`/product-details/${eachProduct.id}`}>
//       <div className="products__item">
//         <img src={eachProduct.image_url} />
//         <p className="products__item-text">{eachProduct.name}</p>
//         <p className="products__item-amount">{eachProduct.price}</p>
//         <p className="products__item-size">{eachProduct.sizes}</p>
//         <p className="products__item-colors">{eachProduct.colors}</p>
//         <p className="products__item-material">{eachProduct.material}</p>
//       </div>
//     </Link>
//   );
// }

// export default EachProduct;

import { Link } from "react-router-dom";
import "./EachProduct.scss";

function EachProduct({ eachProduct }) {
  return (
    <Link to={`/product-details/${eachProduct.id}`} className="products__link">
      <div className="products__item">
        <img src={eachProduct.image_url} alt=""/>
        <p className="products__item-text" style={{ padding: "0 5px" }}>
          {eachProduct.name}
        </p>
        <p className="products__item-amount">
          <span style={{ fontWeight: "bold" }}>Price:</span> {eachProduct.price}
        </p>
        
      </div>
    </Link>
  );
}

export default EachProduct;
