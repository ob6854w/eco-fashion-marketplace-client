import EachProduct from "../EachProduct/EachProduct";
import "./Products.scss";

function Products({ products, isFull }) {
  const allProducts = isFull ? products : products?.splice(0, 6);
  return (
    <div className="products" id="products">
      <h3 className="products__title">Best Products</h3>
      <div className="products__wrapper">
        {allProducts?.map((eachProduct) => {
          return <EachProduct key={eachProduct.id} eachProduct={eachProduct} />;
        })}
      </div>
    </div>
  );
}

export default Products;
