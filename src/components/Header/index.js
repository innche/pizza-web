import React from "react";
import { Link } from "react-router-dom";
import CurrencyPicker from "./CurrencyPicker";

const Header = () => {
  return (
    <header>
      <Link to="/cart">cart</Link>
      <CurrencyPicker />
    </header>
  );
};

export default Header;
