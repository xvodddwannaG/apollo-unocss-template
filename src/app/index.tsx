import "uno.css";
import "@unocss/reset/normalize.css";
import { ApolloProvider } from "@apollo/client";
import client from "../shared/api";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div />
    </ApolloProvider>
  );
};

export default App;
