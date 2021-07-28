const express = require('express');
const graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = graphql;

const { graphqlHTTP } = require('express-graphql');

const userData = require('./data.json');
console.log(userData);

let app = express();
const PORT = 3001;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  })
});

// Setting up RootQuery 
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getUserList: {
      type: new GraphQLList(UserType),
      args: { 
        id: {
          type: GraphQLInt
        }
      },
      resolve(parent, args) {
        console.log(userData);
        return userData;
      }
    },
    getUserById: {
      type: UserType,
      description: 'Enter Id to get the individual user object',
      args: { 
        id: {
          type: GraphQLInt
        }
      },
      resolve(parent, args) {
        if(args.id ){
          let id = args.id;
          let userDetails = userData.filter(user => {
            if(user.id == id){
              return user;
            }
          });
          console.log(userDetails);
          return userDetails[0];
        }
      }
    }
  }
});

const Mutation = '';

// Let's have the schema for the app
// Schema is a combination of query and mutation
const schema = new GraphQLSchema({
    //it expects query inside
    query: RootQuery,       // we have to create RootQuery for the app and associate it here
    //mutation: Mutation
});

app.use(express.json());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log('GraphQL NodeJS App is running on http://localhost:3001/graphql');
})