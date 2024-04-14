import Button from "../Button/Button";
import img from "../../assets/images/brand4.png";
import "./Cart.scss";
import useCurrentUser from "../../hooks/useCurrentUser";
import { useEffect } from "react";

const Cart = () => {
  const { isNotLoggedIn } = useCurrentUser();

  useEffect(() => {
    if (isNotLoggedIn) {
      window.location.href = "/login";
    }
  }, [isNotLoggedIn]);

  return (
    <>
      <div className="cart">
        <div className="cart__cont">
          <div className="cart__wrapper1">
            <p></p>
            <p></p>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <div className="cart__wrapper2">
            <Button className="cart__wrapper2-btn">X</Button>
            <img src={img} alt="" className="cart__wrapper2-img" />
            <p>Plain White Shirt</p>
            <p>$59.00</p>
            <p>1</p>
            <p>$59.00</p>
          </div>
        </div>
      </div>
      <div className="cart__cont2">
        <div className="cart__cont2-wrapper">
          <div className="cart__cont2-wrapper-cont">
            <h2>Cart Totals</h2>
            <div className="cart__cont2-cont">
              <div className="cart__wrapper3">
                <p>Subtotal</p>
                <p>$59.00</p>
              </div>
              <div className="cart__wrapper3 mid">
                <p>Shipping Fee</p>
                <p>FREE!!!</p>
              </div>
              <div className="cart__wrapper3">
                <p>Total</p>
                <p>$59.00</p>
              </div>
            </div>
          </div>
          <Button className="cart__checkout-btn">PROCEED TO CHECKOUT</Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
