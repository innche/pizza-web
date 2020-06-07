import React from "react";
import PriceTag from "../Common/PriceTag";
import CartButton from "./CartButton";

const Pizza = ({ data }) => {
  return (
    <div className="tc bg-white br3 pa4 ma3 dib bw2 shadow-5 mw9 mw7-ns">
      <img className="pizza-image" src={data.imageUrl} alt="" />
      <h2 className="f1 measure-narrow lh-title mt0 mb2">
        <span className="bg-black lh-copy white pa1 tracked-tight">
          {data.name}
        </span>
      </h2>
      <div className="fl mt3">
        <CartButton pizzaId={data.id} />
      </div>
      <div className="fr">
        <PriceTag price={data.price} />
      </div>
    </div>
  );
};

export default Pizza;
