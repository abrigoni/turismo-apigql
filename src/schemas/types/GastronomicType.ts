import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat } from "graphql";
import LocationType from "./LocationType";

const GastronomicType = new GraphQLObjectType({
  name: 'Gastronomic',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    lat: { type: GraphQLFloat },
    lng: { type: GraphQLFloat },
    location: { 
      type: LocationType, 
      resolve(parent, args) {
        return null;
      }
    }
  })
});

export default GastronomicType;