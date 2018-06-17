import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({ uri: "http://localhost:4000" });

const AppWithProvider = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
ReactDOM.render(<AppWithProvider />, document.getElementById("root"));
registerServiceWorker();
