import { useState } from "react";
import { LOCAL_STORAGE_CART } from "../constants";

export const useCartState = () => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART)) || {}
  );

  const increment = (id) => {
    const newState = { ...state, [id]: state[id] ? state[id] + 1 : 1 };
    localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(newState));
    setState(newState);
  };

  const decrement = (id) => {
    const newState = { ...state };
    newState[id]--;
    if (newState[id] === 0) {
      delete newState[id];
    }
    localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(newState));
    setState(newState);
  };

  const remove = (id) => {
    if (state[id]) {
      const newState = { ...state };
      delete newState[id];
      localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(newState));
      setState(newState);
    }
  };

  return [state, increment, decrement, remove];
};
