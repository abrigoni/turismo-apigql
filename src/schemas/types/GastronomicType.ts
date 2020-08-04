import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat, GraphQLList } from "graphql";
import { getConnection } from "typeorm";
import { Gastronomic, Location } from "../../models";
import LocationType from "./LocationType";
import ActivityType from "./ActivityType";
import SpecialityType from "./SpecialityType";

const GastronomicType = new GraphQLObjectType<Gastronomic, any>({
  name: 'Gastronomic',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    lat: { type: GraphQLFloat },
    lng: { type: GraphQLFloat },
    location: { 
      type: LocationType,
      resolve(parent,) {
        return parent.location;
      }
    },
    activities: {
      type: new GraphQLList(ActivityType),
      resolve(parent, args) {
        return parent.activities;
      }
    },
    specialities: {
      type: new GraphQLList(SpecialityType),
      resolve(parent, args) {
        return parent.specialities;
      }
    }
  })
});

export default GastronomicType;