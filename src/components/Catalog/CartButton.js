import React from "react";

const CartButton = ({ pizzaId }) => {
  const onCartClick = (pizzaId) => {
    console.log(`Pizza ${pizzaId} added to cart`);
  };

  return (
    <div>
      <button onClick={() => onCartClick(pizzaId)}>Add to cart</button>
    </div>
  );
};

export default CartButton;
