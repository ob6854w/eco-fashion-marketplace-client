import EachProduct from "../EachProduct/EachProduct";
import img1 from "../../assets/images/product 1.png";
import "./Products.scss";

function Products({ products }) {
  const allProducts = products?.splice(0, 6);
  return (
    <div className="products" id="products">
      <h3 className="products__title">Best Products</h3>
      <div className="products__wrapper">
        {allProducts?.map((eachProduct) => {
          return <EachProduct eachProduct={eachProduct} />;
        })}
      </div>
    </div>
  );
}

export default Products;
