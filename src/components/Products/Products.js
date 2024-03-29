import EachProduct from "../EachProduct/EachProduct";
import img1 from "../../assets/images/product 1.png";
import img2 from "../../assets/images/product2.png";
import img3 from "../../assets/images/product3.png";
import img4 from "../../assets/images/product4.png";
import "./Products.scss"


function Products() {
  return (
    <div className="products" id="products">
      <h3 className="products__title">Best Products</h3>
      <div className="products__wrapper">
        <EachProduct text="Woman in Red Coat" amount="$89" src={img1} />
        <EachProduct text="Woman in Red Coat" amount="$89" src={img2} />
        <EachProduct text="Woman in Red Coat" amount="$89" src={img3} />
        <EachProduct text="Woman in Red Coat" amount="$89" src={img4} />
        <EachProduct text="Woman in Red Coat" amount="$89" src={img1} />
        <EachProduct text="Woman in Red Coat" amount="$89" src={img2} />
        <EachProduct text="Woman in Red Coat" amount="$89" src={img3} />
        <EachProduct text="Woman in Red Coat" amount="$89" src={img4} />
      </div>
    </div>
  );
}

export default Products;
