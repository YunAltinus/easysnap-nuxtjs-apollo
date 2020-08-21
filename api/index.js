// @ts-nocheck
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { ApolloServer, PubSub } = require('apollo-server-express');
const { importSchema } = require('graphql-import');

// Provide resolver functions for your schema fields
const typeDefs = importSchema('./graphql/schema.gql');

const resolvers = require('./graphql/resolvers/index');

// User DB
const User = require('./models/User.js');
const Snap = require('./models/Snap.js');

//DB
mongoose
  .connect(process.env.DB_MONGOOSE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(response => console.log('connected to MongoDB'))
  .catch(e => console.error(e));

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    User,
    Snap,
    pubsub,
    activeUser: req ? req.activeUser : null
  })
});
const app = express();

// JWT VERIFY Middleware

app.use(async (req, res, next) => {
  const token = await req.headers['authorization'];
  if (token && token !== null) {
    try {
      const checkToken = token.split(' ')[1];

      const activeUser = await jwt.verify(checkToken, process.env.JWT_KEY);
      req.activeUser = activeUser;
    } catch (error) {
      console.log(error);
    }
  }
  next();
});

server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const port = 4000;
httpServer.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
