import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartButton = ({ pizzaId }) => {
  const { cart, incrementInCart } = useContext(CartContext);

  return (
    <>
      <button
        className="pa3 ba b--gold bg-gold br3 grow f3"
        onClick={() => incrementInCart(pizzaId)}
      >
        <span role="img" aria-label="cart">
          🛒
        </span>
        <span className="cart-button-label">&nbsp;Add to cart</span>
      </button>
      <span className="pl2">
        {cart[pizzaId] ? `${cart[pizzaId]} in the cart` : ""}
      </span>
    </>
  );
};

export default CartButton;
