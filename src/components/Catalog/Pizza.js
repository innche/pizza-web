import React from "react";
import CartButton from "./CartButton";
import PizzaPrice from "./PizzaPrice";

const Pizza = ({ data }) => {
  return (
    <>
      <img src={data.imageUrl} alt="" />
      <div>{data.name}</div>
      <PizzaPrice price={data.price} />
      <CartButton pizzaId={data.id} />
    </>
  );
};

export default Pizza;
