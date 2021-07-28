const { GraphQLInt, GraphQLList } = require("graphql");
const UserType = require("../TypeDefs/User");

// These are inline exports
exports.GET_USERS = {
  type: new GraphQLList(UserType),
  //args: { id: { type: GraphQLInt }},
  resolve(parent, args) {
    //console.log(args);
    return [
      {
        id: 1,
        name: "Arun",
        phone: "1212",
      },
      { 
        id: 2,
        name: "John",
        phone: "342342"
      }
    ]
  }
};

exports.GET_USER_BY_ID = {
  type: UserType,
  args: { id: { type: GraphQLInt }},
  resolve(parent, args) {
    console.log(args);
    // exec db query to fetch user details for the id
    // now returning mock data
    return {
        id: 1,
        name: "Arun",
        phone: "1212",
      }
  }
};