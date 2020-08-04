import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

const LocationType = new GraphQLObjectType({
  name: 'Location',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  })
});

export default LocationType;