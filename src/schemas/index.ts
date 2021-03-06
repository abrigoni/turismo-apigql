import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList } from 'graphql';
import { getConnection } from 'typeorm';
import { Activity, Category,  Classification, Location, Gastronomic, Lodging, Speciality } from '../models';
import { ActivityType, CategoryType,  ClassificationType, LocationType, GastronomicType, LodgingType, SpecialityType} from './types';


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
        const categoriesRepository = getConnection().getRepository(Category);
        return categoriesRepository.find();
      }
    },
    category: {
      type: CategoryType,
      args: { id: { type: GraphQLID }}, 
      resolve(parent, args) {
        const categoriesRepository = getConnection().getRepository(Category);
        return categoriesRepository.findOne(args.id);
      }
    },
    classifications: {
      type: new GraphQLList(ClassificationType),
      resolve(parent, args) {
        const classificationsRepository = getConnection().getRepository(Classification);
        return classificationsRepository.find();
      }
    },
    classification: {
      type: ClassificationType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const classificationsRepository = getConnection().getRepository(Classification);
        return classificationsRepository.findOne(args.id);
      }
    },
    gastronomics: {
      type: new GraphQLList(GastronomicType),
      resolve(parent, args) {
        const gastronomicsRepository = getConnection().getRepository(Gastronomic);
        return gastronomicsRepository.find({relations: ["activities", "specialities", "location"]});
      }
    }, 
    gastronomic: {
      type: GastronomicType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const gastronomicsRepository = getConnection().getRepository(Gastronomic);
        return gastronomicsRepository.findOne(args.id,{relations: ["activities", "specialities", "location"]})
      }
    },
    locations: {
      type: new GraphQLList(LocationType),
      resolve(parent, args) {
        const locationsRepository = getConnection().getRepository(Location);
        return locationsRepository.find();
      }
    },
    location: {
      type: LocationType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const locationsRepository = getConnection().getRepository(Location);
        return locationsRepository.findOne(args.id);
      }
    },
    lodgings: {
      type: new GraphQLList(LodgingType), 
      resolve(parent, args) {
        const lodgingRepository = getConnection().getRepository(Lodging);
        return lodgingRepository.find({relations: ["category", "classification", "location"]});
      }
    },
    lodging: {
      type: LodgingType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        const lodgingRepository = getConnection().getRepository(Lodging)
        return lodgingRepository.findOne(args.id, {relations: ["category", "classification", "location"]});
      }
    },
    specialities: {
      type: new GraphQLList(SpecialityType),
      resolve(parent, args) {
        const specialitiesRepository = getConnection().getRepository(Speciality);
        return specialitiesRepository.find();
      }
    },
    speciality: {
      type: SpecialityType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const specialitiesRepository = getConnection().getRepository(Speciality);
        return specialitiesRepository.findOne(args.id);
      }
    }
  }
  )
});

export default new GraphQLSchema({
  query: RootQuery
});