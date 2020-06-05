import { useState } from "react";

export const useCartState = () => {
  const [state, setState] = useState({});

  const increment = (id) => {
    setState({ ...state, [id]: state[id] ? state[id] + 1 : 1 });
  };

  const decrement = (id) => {
    const newState = { ...state };
    newState[id]--;
    if (newState[id] === 0) {
      delete newState[id];
    }
    setState(newState);
  };

  const remove = (id) => {
    if (state[id]) {
      const newState = { ...state };
      delete newState[id];
      setState(newState);
    }
  };

  return [state, increment, decrement, remove];
};
