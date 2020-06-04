import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CURRENCY_EUR } from "../constants";
import { CurrencyContext } from "../contexts/CurrencyContext";
import "./App.css";
import Cart from "./Cart";
import Catalog from "./Catalog";
import Header from "./Header";

function App() {
  const [currency, setCurrency] = useState(CURRENCY_EUR);

  return (
    <BrowserRouter>
      <CurrencyContext.Provider value={[currency, setCurrency]}>
        <Header />
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </CurrencyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
