import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./Cart";
import Catalog from "./Catalog";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/cart">cart</Link>
      </header>
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
