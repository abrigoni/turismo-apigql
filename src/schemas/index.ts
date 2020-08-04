import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList } from 'graphql';
import { getConnection } from 'typeorm';
import { Activity, Lodging } from '../models';
import { ActivityType, CategoryType,  ClassificationType, LocationType, GastronomicType, LodgingType, SpecialityType} from './types';
import { resolve } from 'path';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType', 
  fields: () => ({
    activities: {
      type: new GraphQLList(ActivityType),
      resolve(parent, args) {
        const activitiesRepository = getConnection().getRepository(Activity);
        return activitiesRepository.find();
      }
    },
    activity: {
      type: ActivityType, 
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        const activitiesRepository = getConnection().getRepository(Activity);
        return activitiesRepository.findOne(args.id);
      }
    },
    categories: {
      type: new GraphQLList(CategoryType),
      resolve(parent, args) {

      }
    },
    category: {
      type: CategoryType,
      resolve(parent, args) {
        
      }
    },
    classifications: {
      type: new GraphQLList(ClassificationType),
      resolve(parent, args) {

      }
    },
    classification: {
      type: ClassificationType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        
      }
    },
    gastronomics: {
      type: new GraphQLList(GastronomicType),
      resolve(parent, args) {

      }
    }, 
    gastronomic: {
      type: GastronomicType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        
      }
    },
    locations: {
      type: new GraphQLList(LocationType),
      resolve(parent, args) {

      }
    },
    location: {
      type: LocationType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        
      }
    },
    lodgings: {
      type: new GraphQLList(LodgingType), 
      resolve(parent, args) {
        const lodgingRepository = getConnection().getRepository(Lodging);
        return lodgingRepository.find();
      }
    },
    lodging: {
      type: LodgingType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        const lodgingRepository = getConnection().getRepository(Lodging)
        return lodgingRepository.findOne(args.id);
      }
    },
    specialities: {
      type: new GraphQLList(SpecialityType),
      resolve(parent, args) {

      }
    },
    speciality: {
      type: SpecialityType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        
      }
    }
  }
  )
});

export default new GraphQLSchema({
  query: RootQuery
});