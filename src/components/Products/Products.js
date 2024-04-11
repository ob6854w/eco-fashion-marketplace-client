import EachProduct from "../EachProduct/EachProduct";

import "./Products.scss";

function Products({ products }) {
  const allProducts = products?.splice(0, 6);

  return (
    <div className="products" id="products">
      <h3 className="products__title">Best Products</h3>
      <div className="products__wrapper">
        {allProducts?.map((eachProduct) => {
          return (
            <EachProduct
              src={eachProduct.image_url}
              eachProduct={eachProduct}
            />
          );
        })}
        {/* // <EachProduct text="Woman in Red Coat" amount="$89" src={img2} />
        // <EachProduct text="Woman in Red Coat" amount="$89" src={img3} />
        // <EachProduct text="Woman in Red Coat" amount="$89" src={img4} />
        // <EachProduct text="Woman in Red Coat" amount="$89" src={img1} />
        // <EachProduct text="Woman in Red Coat" amount="$89" src={img2} />
        // <EachProduct text="Woman in Red Coat" amount="$89" src={img3} />
        // <EachProduct text="Woman in Red Coat" amount="$89" src={img4} /> */}
      </div>
    </div>
  );
}

export default Products;
