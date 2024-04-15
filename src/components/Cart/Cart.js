import Button from "../Button/Button";
import img from "../../assets/images/brand4.png";
import "./Cart.scss";
import useCart from "../../hooks/useCart";
import formatToCurrency from "../../utils/formatToCurrency";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const { data, handleUpdateCartItem, handleRemoveCartItem, isNotLoggedIn } =
    useCart();
  const navigate = useNavigate()

    useEffect(() => {
      if (isNotLoggedIn) {
        navigate("/login");
      }
    }, [isNotLoggedIn]);


  if (data.isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "2rem",
        }}
      >
        Loading...
      </div>
    );
  }

  if (data.error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "2rem",
        }}
      >
        Error: {data.error}
      </div>
    );
  }

  const totalPrice = data?.data?.reduce((acc, item) => {
    return acc + parseFloat(item.price) * item.quantity;
  }, 0);

  return (
    <>
      <div className="cart">
        <div className="cart__cont">
          <div className="cart__wrapper1">
            <p></p>
            <p></p>
            <p></p>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          {data?.data?.map((item) => {
            return (
              <div className="cart__wrapper2">
                <div>
                  <button
                    className="cart__wrapper2-btn"
                    onClick={() => handleRemoveCartItem(item.id)}
                  >
                    X
                  </button>
                  <button
                    className="cart__wrapper2-btn"
                    onClick={() => handleUpdateCartItem(item.product_id, true)}
                  >
                    +
                  </button>
                  <button
                    className="cart__wrapper2-btn"
                    onClick={() => handleUpdateCartItem(item.product_id, false)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                </div>
                <img
                  src={item.image_url}
                  alt=""
                  className="cart__wrapper2-img"
                />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <p>
                  {formatToCurrency(
                    +(parseFloat(item.price) * item.quantity).toFixed(2)
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="cart__cont2">
        <div className="cart__cont2-wrapper">
          <div className="cart__cont2-wrapper-cont">
            <h2>Cart Totals</h2>
            <div className="cart__cont2-cont">
              <div className="cart__wrapper3">
                <p>Subtotal</p>
                <p>{formatToCurrency(totalPrice)}</p>
              </div>
              <div className="cart__wrapper3 mid">
                <p>Shipping Fee</p>
                <p>FREE!!!</p>
              </div>
              <div className="cart__wrapper3">
                <p>Total</p>
                <p>{formatToCurrency(+totalPrice)}</p>
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
