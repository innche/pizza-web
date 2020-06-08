import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { PriceTag } from "../Common/PriceTag";
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
        deliveryPrice {
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

        <div className="cart-item">
          <span className="cart-name f2 lh-title mt0 mb2">Delivery</span>
          <div className="cart-price">
            <PriceTag className="cart-price" price={data.deliveryPrice.price} />
          </div>
        </div>

        <div className="cart-item mb5">
          <span className="cart-name f2 lh-title mt0 mb2">Total</span>
          <div className="cart-price">
            <PriceTag
              className="cart-price"
              price={{
                priceEUR: data.pizzas.reduce(
                  (sum, item) => sum + item.price.priceEUR * cart[item.id],
                  data.deliveryPrice.price.priceEUR
                ),
                priceUSD: data.pizzas.reduce(
                  (sum, item) => sum + item.price.priceUSD * cart[item.id],
                  data.deliveryPrice.price.priceUSD
                )
              }}
            />
          </div>
        </div>
        <OrderForm />
      </div>
    </main>
  );
};

export default Cart;
