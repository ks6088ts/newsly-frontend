import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ArticleList } from "./components/ArticleList";

const clientLocal = new ApolloClient({
  uri: "http://localhost:8080/query",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={clientLocal}>
      <ArticleList />
    </ApolloProvider>
  );
}

export default App;
