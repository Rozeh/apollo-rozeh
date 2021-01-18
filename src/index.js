import { ApolloServer } from 'apollo-server';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const server = new ApolloServer({
    typeDefs,
    resolvers
});

//웹서버 실행
server.listen().then(({url}) => {
    console.log(`Gql server ready at ${url}`)
});