import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import CurrencyPicker from "./CurrencyPicker";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="tc f2 bg-black pa2">
      <div className="content tr tcmw7-ns">
        <CurrencyPicker />
        <Link to="/cart" className="no-underline light-purple ml4">
          <span role="img" aria-label="cart">
            🛒
          </span>
          &nbsp;
          {Object.keys(cart).reduce((sum, key) => sum + cart[key], 0) || ""}
        </Link>
      </div>
    </header>
  );
};

export default Header;
