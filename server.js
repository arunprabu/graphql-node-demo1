// This is the final version of the project
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schemas');

const app = express();
const PORT = 3001;

app.use('/graphql', graphqlHTTP({
  schema: schema, // Schema is not properly setup for this
  graphiql: true // graphiql is a client
}));

// GraphiQL is an in-browser tool for writing, validating, and testing GraphQL queries.

app.listen(PORT, () => {
  console.log('GraphQL NodeJS App is running on http://localhost:3001/graphql');
});

// try node server.js and check the app at http://localhost:3001/graphql