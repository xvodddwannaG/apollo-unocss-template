import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://tolerant-troll-54.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "q5YAuw6qzqK0mAKBSIM0VRuF4fX11wUA3W6A0b1mqtGs4OF7gwBmfk6MMx1SgM8g",
  },
  cache: new InMemoryCache(),
});

export default client;
