import React from "react";
import { PriceTag } from "../Common/PriceTag";
import { QuantityControl } from "./QuantityControl";

export const CartItem = ({ data }) => {
  return (
    <div className="cart-item">
      <span className="cart-name f2 lh-title mt0 mb2">
        <span className="bg-black lh-copy white pa1 tracked-tight">
          {data.name}
        </span>
      </span>
      <div className="cart-quantity tc">
        <QuantityControl id={data.id} />
      </div>
      <div className="cart-price">
        <PriceTag className="cart-price" price={data.price} />
      </div>
    </div>
  );
};

export default CartItem;
