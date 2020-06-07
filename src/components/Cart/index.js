import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./CartItem";
import "./index.css";
import OrderForm from "./OrderForm";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { data, dataLoading } = useQuery(
    gql`
      query Pizzas($ids: [Int]!) {
        pizzas(ids: $ids) {
          id
          name
          price {
            priceEUR
            priceUSD
          }
        }
      }
    `,
    {
      variables: {
        ids: cart ? Object.keys(cart).map((item) => Number.parseInt(item)) : []
      }
    }
  );

  if (dataLoading || !data) {
    return null;
  }

  if (cart == null || Object.keys(cart).length === 0) {
    return (
      <main className="bg-dark-green">
        <div className="content bg-white pa4 f3">
          Cart is empty. Pick something in <Link to="/">catalog</Link>!
        </div>
      </main>
    );
  }

  return (
    <main className="bg-dark-green">
      <div className="content bg-white pa4">
        <Link to="/">&lt;&nbsp;Back to catalog</Link>
        <h1 className="h1 mb5">Cart</h1>
        {data.pizzas.map((pizza, index) => (
          <CartItem data={pizza} key={index} />
        ))}
        <OrderForm />
      </div>
    </main>
  );
};

export default Cart;
