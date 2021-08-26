import React from "react";
import ReactDOM from "react-dom";
import App from "./Compoments/App";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
