import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

const ActivityType = new GraphQLObjectType({
  name: 'Activity',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  })
});

export default ActivityType;