import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";
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
    <main>
      {data.pizzas.map((pizza) => (
        <Pizza data={pizza} key={pizza.id} />
      ))}
    </main>
  );
};

export default Catalog;
