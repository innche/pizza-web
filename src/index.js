import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import "dotenv/config";
import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import App from "./components/App";
import "./index.css";

console.log(process.env.REACT_APP_GRAPHQL_URL);

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
