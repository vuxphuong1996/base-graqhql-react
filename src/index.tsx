import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
    ApolloClient,
    ApolloProvider,
    NormalizedCacheObject,
    gql,
    useQuery,
} from '@apollo/client';
import { Dashboard, Login } from 'pages';
import { cache } from './cache';
import theme from 'theme';

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
    }
`;

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
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

const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`;

function IsLoggedIn() {
    const { data } = useQuery(IS_LOGGED_IN);
    return data.isLoggedIn ? <Dashboard /> : <Login />;
}

ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <IsLoggedIn />
        </ThemeProvider>
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
