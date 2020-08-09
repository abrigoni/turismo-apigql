import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat } from 'graphql';
import {  getConnection } from 'typeorm';
import { Location, Category, Lodging, Classification } from '../../models';
import { LocationType, CategoryType, ClassificationType } from './';


const LodgingType = new GraphQLObjectType<Lodging, any>({
  name: 'Lodging',
  fields: () => ({
    id: { type: GraphQLInt }, 
    name: { type: GraphQLString },
    lat: { type: GraphQLFloat },
    lng: { type: GraphQLFloat },
    address: {type: GraphQLString},
    picture: { type: GraphQLString },
    location: { 
      type: LocationType,
      resolve(parent,) {
        return parent.location
      }
    },
    category: {
      type: CategoryType, 
      resolve(parent,) {
        return parent.category
      }
    },
    classification: {
      type: ClassificationType, 
      async resolve(parent,) {
        return parent.classification;
      }
    }
  })
});

export default LodgingType;