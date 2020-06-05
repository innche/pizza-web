import React from "react";
import { PriceTag } from "../Common/PriceTag";
import { QuantityControl } from "./QuantityControl";

export const CartItem = ({ data }) => {
  return (
    <div>
      <div>{data.name}</div>
      <PriceTag price={data.price} />
      <QuantityControl id={data.id} />
    </div>
  );
};

export default CartItem;
