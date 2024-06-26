import { useEffect, useState } from "react";
import useCurrentUser from "./useCurrentUser";
import {
  getAllUserCartItems,
  updateCartItem,
  removeCartItem,
  createCartItem,
} from "../services/cart";

function useCart() {
  const { isNotLoggedIn, userData } = useCurrentUser();

  const [data, setData] = useState({
    data: null,
    isLoading: false,
    error: null,
  });

  const fectchUserCartItems = async () => {
    try {
      setData({ data: null, isLoading: true, error: null });

      const data = await getAllUserCartItems(userData.id);

      setData({ data, isLoading: false, error: null });
    } catch (error) {
      setData({ data: null, isLoading: false, error: error.message });
    }
  };

  const handleUpdateCartItem = async (productId, isIncrement) => {
    try {
      await updateCartItem(userData.id, productId, isIncrement);

      const newData = data.data.map((item) => {
        if (item.product_id === productId) {
          return {
            ...item,
            quantity: isIncrement ? item.quantity + 1 : item.quantity - 1,
          };
        }

        return item;
      });

      setData({ data: newData, isLoading: false, error: null });
    } catch (error) {
      setData({ data: null, isLoading: false, error: error.message });
    }
  };

  const handleRemoveCartItem = async (cartId) => {
    try {
      await removeCartItem(cartId);

      const newData = data.data.filter((item) => item.id !== cartId);

      setData({ data: newData, isLoading: false, error: null });
    } catch (error) {
      setData({ data: null, isLoading: false, error: error.message });
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      console.log("useCart.handleAddToCart -> data");
      await createCartItem(userData.id, productId);

      const newCartItem = {
        user_id: userData.id,
        product_id: productId,
        quantity: 1,
      };

      fectchUserCartItems();
    } catch (error) {
      setData({ data: null, isLoading: false, error: error.message });
    }
  };

  useEffect(() => {
    if (!userData) return;

    fectchUserCartItems();
  }, [userData]);

  return {
    data,
    handleUpdateCartItem,
    handleRemoveCartItem,
    handleAddToCart,
    isNotLoggedIn,
  };
}

export default useCart;
