const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

module.exports = BookType;