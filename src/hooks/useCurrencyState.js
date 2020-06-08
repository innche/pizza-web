import { useState } from "react";
import {
  CURRENCY_EUR,
  CURRENCY_USD,
  LOCAL_STORAGE_CURRENCY
} from "../constants";

export const useCurrencyState = () => {
  const [currency, setCurrencyToState] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_CURRENCY)) === CURRENCY_USD
      ? CURRENCY_USD
      : CURRENCY_EUR
  );

  const setCurrency = (newCurrency) => {
    localStorage.setItem(LOCAL_STORAGE_CURRENCY, JSON.stringify(newCurrency));
    setCurrencyToState(newCurrency);
  };

  return {
    currency,
    setCurrency
  };
};
