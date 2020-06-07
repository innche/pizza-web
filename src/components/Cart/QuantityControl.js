import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const QuantityControl = ({ id }) => {
  const { cart, incrementInCart, decrementInCart, removeFromCart } = useContext(
    CartContext
  );
  return (
    <div>
      <button onClick={() => decrementInCart(id)}>-</button>
      <span>{cart[id]}</span>
      <button onClick={() => incrementInCart(id)}>+</button>
      <button onClick={() => removeFromCart(id)}>Delete</button>
    </div>
  );
};

export default QuantityControl;
