import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const QuantityControl = ({ id }) => {
  const { cart, incrementInCart, decrementInCart, removeFromCart } = useContext(
    CartContext
  );
  return (
    <>
      <button
        className="cart-button pa2 ba b--gold bg-gold br3 grow f4"
        onClick={() => decrementInCart(id)}
      >
        -
      </button>
      <span> {cart[id]} </span>
      <button
        className="cart-button pa2 ba b--gold bg-gold br3 grow f4"
        onClick={() => incrementInCart(id)}
      >
        +
      </button>
      <br />
      <button
        className="pa2 ba b--transparent bg-transparent grow f4"
        onClick={() => removeFromCart(id)}
      >
        <span role="img" aria-label="remove">
          🗑️
        </span>
      </button>
    </>
  );
};

export default QuantityControl;
