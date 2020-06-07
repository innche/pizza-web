import { useState } from "react";
import { LOCAL_STORAGE_CART } from "../constants";

export const useCartState = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART)) || {}
  );

  const incrementInCart = (id) => {
    const newState = { ...cart, [id]: cart[id] ? cart[id] + 1 : 1 };
    localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(newState));
    setCart(newState);
  };

  const decrementInCart = (id) => {
    const newState = { ...cart };
    newState[id]--;
    if (newState[id] === 0) {
      delete newState[id];
    }
    localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(newState));
    setCart(newState);
  };

  const removeFromCart = (id) => {
    if (cart[id]) {
      const newState = { ...cart };
      delete newState[id];
      localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(newState));
      setCart(newState);
    }
  };

  const emptyCart = () => {
    const newState = {};
    localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(newState));
    setCart(newState);
  };

  return {
    cart,
    incrementInCart,
    decrementInCart,
    removeFromCart,
    emptyCart
  };
};
