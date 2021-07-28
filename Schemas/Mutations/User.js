const { GraphQLString, GraphQLInt } = require("graphql");
const UserType = require("../TypeDefs/User");

exports.CREATE_USER = {
  type: UserType,
  // What can be args for creating user? the form data.
  args: {
    name: { type: GraphQLString },
    phone: { type: GraphQLString }
  },
  resolve(parent, args) {
    console.log(parent, args);
    //exec query and return the status of create operation
    return {
      id: 999, // trying mock id
      name: args.name,
      phone: args.phone
    }
  }
};

exports.UPDATE_USER = {
  type: UserType,
  // What can be args for creating user? the form data.
  args: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    phone: { type: GraphQLString }
  },
  resolve(parent, args) {
    console.log(parent, args);
    //exec query and return the status of update operation
    return {
      id: args.id, // trying mock id
      name: args.name,
      phone: args.phone
    }
  }
};