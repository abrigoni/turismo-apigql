import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";

const SpecialityType = new GraphQLObjectType({
  name: 'Speciality',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  })
});

export default SpecialityType;