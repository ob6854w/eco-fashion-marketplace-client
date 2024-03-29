import "./EachProduct.scss";

function EachProduct({ text, amount, src }) {
  return (
    <div className="products__item">
      <img src={src} />
      <p className="products__item-text">{text}</p>
      <p className="products__item-amount">{amount}</p>
    </div>
  );
}

export default EachProduct;
