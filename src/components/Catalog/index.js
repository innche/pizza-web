import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";

const Catalog = () => {
  const { data, dataLoading } = useQuery(gql`
    {
      getPizzas {
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

  return <div>{data.getPizzas[0].name}</div>;
};

export default Catalog;
