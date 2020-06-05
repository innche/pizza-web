import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartButton = ({ pizzaId }) => {
  const [cart, incrementInCart] = useContext(CartContext);

  return (
    <div>
      <span>{cart[pizzaId] ? `${cart[pizzaId]} in the cart` : ""}</span>
      <button onClick={() => incrementInCart(pizzaId)}>Add to cart</button>
    </div>
  );
};

export default CartButton;
