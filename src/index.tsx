import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    ApolloProvider,
    gql,
    useQuery,
} from '@apollo/client';
import reportWebVitals from './reportWebVitals';
import { Dashboard, Login, Register } from 'pages';
import theme from 'theme';
import { client } from 'utils/createClient';

const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`;

function Account() {
    return (
        <Fragment>
            <Router primary={false} component={Fragment}>
                <Login path="/*" />
                <Register path="register" />
            </Router>
        </Fragment>
    )
}

function IsLoggedIn() {
    const { data } = useQuery(IS_LOGGED_IN);
    return data.isLoggedIn ? <Dashboard /> : <Account />;
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
