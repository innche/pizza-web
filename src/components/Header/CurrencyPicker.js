import React, { useContext } from "react";
import { CURRENCY_EUR, CURRENCY_USD } from "../../constants";
import { CurrencyContext } from "../../contexts/CurrencyContext";

const CurrencyPicker = () => {
  const [currency, setCurrency] = useContext(CurrencyContext);

  const onChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <select onChange={onChange} value={currency}>
      <option value={CURRENCY_EUR}>€</option>
      <option value={CURRENCY_USD}>$</option>
    </select>
  );
};

export default CurrencyPicker;
