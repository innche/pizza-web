import React from "react";
import PriceTag from "../Common/PriceTag";
import CartButton from "./CartButton";

const Pizza = ({ data }) => {
  return (
    <>
      <img src={data.imageUrl} alt="" />
      <div>{data.name}</div>
      <PriceTag price={data.price} />
      <CartButton pizzaId={data.id} />
    </>
  );
};

export default Pizza;
