import React, { useContext } from "react";
import { CURRENCY_EUR } from "../../constants";
import { CurrencyContext } from "../../contexts/CurrencyContext";

export const PriceTag = ({ price }) => {
  const { currency } = useContext(CurrencyContext);

  return (
    <div>
      <span className="f-subheadline">
        {currency === CURRENCY_EUR ? price.priceEUR : price.priceUSD}
      </span>
      <span className="dib mt2 f2 v-top">
        {currency === CURRENCY_EUR ? " €" : " $"}
      </span>
    </div>
  );
};

export default PriceTag;
