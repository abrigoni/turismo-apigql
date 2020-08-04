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
    location: { 
      type: LocationType,
      async resolve(parent,) {
        const locationRepository = getConnection().getRepository(Location);
        // const location = await locationRepository.findOne(parent.locationId);
        // return location;
        return locationRepository.findOne(parent.locationId);
      }
    },
    category: {
      type: CategoryType, 
      async resolve(parent,) {
        const categoryRepository = getConnection().getRepository(Category);
        // const category = await categoryRepository.findOne(parent.categoryId);
        // return category;
        return categoryRepository.findOne(parent.categoryId);
      }
    },
    classification: {
      type: ClassificationType, 
      async resolve(parent,) {
        const classificationRepository = getConnection().getRepository(Classification);
        // const classification = await classificationRepository.findOne(parent.classificationId);
        // return classification;
        return classificationRepository.findOne(parent.classificationId);
      }
    }
  })
});

export default LodgingType;