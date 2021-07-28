// Let's setup root query  and Mutations here
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = require("graphql");
const { CREATE_USER, UPDATE_USER } = require("./Mutations/User");
const { GET_USERS, GET_USER_BY_ID } = require("./Queries/User");
const BookType = require("./TypeDefs/Book");

// RootQuery represents app wide queries
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryV2',
  fields: {
    hello: { // here's a hello field with resolve function
      type: GraphQLString,
      resolve(parent, args){
        return 'Hello World!';
      }
    },
    greet: {
      type: GraphQLString,
      args: { name: {type: GraphQLString }},
      resolve(parent, args) {
        console.log(parent);
        console.log(args);
        return `Good Morning, ${args.name}!`;
      }
    },
    book: { // Fetch book by id
      type: BookType,
      args: { id: {type: GraphQLInt }}, // id is needed
      resolve(parent, args) {
        
        console.log(args); // id will be in it if we pass from query
        // exec db query to fetch data for the id
        // but now mocking with the sample data here
        const bookDetails = {
          id: 1,
          name: 'How to GraphQL',
          genre: 'Tech'
        }
        
        return bookDetails;
      }
    },
    userList: GET_USERS,
    user: GET_USER_BY_ID
  }
});

// Now Let's work on Mutations
// Http Methods - POST, PUT, PATCH, DELETE can be handled here
const Mutation = new GraphQLObjectType({
  name: "MutationsV2",
  fields: {
    // Create, Update, Delete operations are the fields
    createUser: CREATE_USER,
    updateUser: UPDATE_USER
    // TODO: delete -- get id only as arg. 
    // after deleting just send the status. 
    // return type should be string or obj. It can't be UserType
  }
}); 

// Let's have the schema for the app
// Schema is a combination of query and mutation
const schema = new GraphQLSchema({
  //it expects query inside
  query: RootQuery,       // we have to create RootQuery for the app and associate it here
  mutation: Mutation // specify mutation here
});

module.exports = schema;

