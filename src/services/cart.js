import http from "../utils/http";

const getAllUserCartItems = async (userId) => {
  const { data } = await http.get(`/carts/${userId}`);

  return data;
};

const createCartItem = async (userId, productId) => {
  await http.post(`/carts`, {
    userId,
    productId,
    quantity: 1,
  });

  return true;
};

const updateCartItem = async (userId, productId, isIncrement) => {
  await http.post(`/carts`, {
    userId,
    productId,
    isIncreament: isIncrement,
  });

  return true;
};

const removeCartItem = async (id) => {
  await http.delete(`/carts/${id}`);

  return true;
};

export { getAllUserCartItems, createCartItem, updateCartItem, removeCartItem };
