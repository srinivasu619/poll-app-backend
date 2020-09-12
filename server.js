const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
require("dotenv").config();

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

(async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app });

  await mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen(process.env.PORT, () =>
    console.log(
      `🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
    )
  );
})();
