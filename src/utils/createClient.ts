import {
    ApolloClient,
    NormalizedCacheObject,
    gql,
} from '@apollo/client';
import { cache } from '../cache';

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
    }
`;

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    uri: '',
    headers: {
        authorization: localStorage.getItem('token') || '',
        'client-name': 'Space Explorer [web]',
        'client-version': '1.0.0',
    },
    typeDefs,
    resolvers: {},
});