import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { CurrencyContext } from "../contexts/CurrencyContext";
import { useCartState } from "../hooks/useCartState";
import { useCurrencyState } from "../hooks/useCurrencyState";
import Cart from "./Cart";
import Catalog from "./Catalog";
import Header from "./Header";

function App() {
  const cartHandlers = useCartState({});
  const currencyHandlers = useCurrencyState({});

  return (
    <BrowserRouter>
      <CartContext.Provider value={cartHandlers}>
        <CurrencyContext.Provider value={currencyHandlers}>
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
