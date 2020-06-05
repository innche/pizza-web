import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CURRENCY_EUR } from "../constants";
import { CartContext } from "../contexts/CartContext";
import { CurrencyContext } from "../contexts/CurrencyContext";
import { useCartState } from "../hooks/useCartState";
import "./App.css";
import Cart from "./Cart";
import Catalog from "./Catalog";
import Header from "./Header";

function App() {
  const [currency, setCurrency] = useState(CURRENCY_EUR);
  const cartHandlers = useCartState({});

  return (
    <BrowserRouter>
      <CartContext.Provider value={cartHandlers}>
        <CurrencyContext.Provider value={[currency, setCurrency]}>
          <Header />
          <Switch>
            <Route exact path="/" component={Catalog} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </CurrencyContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
