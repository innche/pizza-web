import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";
import "./index.css";
import Pizza from "./Pizza";

const Catalog = () => {
  const { data, dataLoading } = useQuery(gql`
    {
      pizzas {
        id
        name
        price {
          priceEUR
          priceUSD
        }
        imageUrl
      }
    }
  `);

  if (dataLoading || !data) {
    return null;
  }

  return (
    <main className="tc bg-dark-green">
      {data.pizzas.map((pizza) => (
        <Pizza data={pizza} key={pizza.id} />
      ))}
    </main>
  );
};

export default Catalog;
