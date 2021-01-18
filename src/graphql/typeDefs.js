import { gql } from 'apollo-server';

const typeDefs = gql`
    type Patient {
        id: Int!
        name: String!
        email: String!
    }

    type Query {
        patients: [Patient!]!
        patient(id: Int!): Patient
    }

    type Mutation {
        addPatient( name: String!, email: String!):Patient!
    }
`;

export default typeDefs;