import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

const ClassificationType = new GraphQLObjectType({
  name: 'Classification',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  })
});

export default ClassificationType;