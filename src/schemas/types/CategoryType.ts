import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: GraphQLInt },
    stars: { type: GraphQLString },
    value: { type: GraphQLInt },
  })
});

export default CategoryType;