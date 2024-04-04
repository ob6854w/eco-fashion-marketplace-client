import "./Cart.scss";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__cont">
        <div className="cart__wrapper1">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <div className="cart__wrapper2">
          <p>Plain White Shirt</p>
          <p>$59.00</p>
          <p>1</p>
          <p>$59.00</p>
        </div>
      </div>
      <div className="cart__wrapper2"></div>
    </div>
  );
};

export default Cart;
