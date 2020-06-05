import React, { useContext } from "react";
import { CURRENCY_EUR } from "../../constants";
import { CurrencyContext } from "../../contexts/CurrencyContext";

export const PriceTag = ({ price }) => {
  const [currrency] = useContext(CurrencyContext);

  if (currrency === CURRENCY_EUR) {
    return <div>{price.priceEUR} €</div>;
  }
  return <div>{price.priceUSD} $</div>;
};

export default PriceTag;
