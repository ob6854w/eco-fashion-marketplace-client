import { useEffect, useState, useMemo } from "react";
import useCart from "./useCart";

const useEachProduct = () => {
  const [product, setProduct] = useState(null);
  const { handleRemoveCartItem, handleAddToCart, data: cartData } = useCart();

  const cartItem = useMemo(() => cartData.data?.find(
    (item) => item.product_id === product?.id
  ), [product?.id, cartData.data]);

  const isProductInCart = !!cartItem;

  useEffect(() => {
    console.log("useEffect", {
      isProductInCart,
      cartData: cartData.data,
    });
  }, [cartData.data?.length]);

  const handleAddProductToCart = () => {
    console.log("handleAddProductToCart => ", {
      cart: cartData.data,
      product,
      isProductInCart,
    });

    if (isProductInCart) {
      return handleRemoveCartItem(cartItem.id);
    }

    handleAddToCart(product.id);
  };

  return {
    isProductInCart,
    handleAddProductToCart,
    setProduct,
  };
};

export default useEachProduct;
