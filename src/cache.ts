import { InMemoryCache, makeVar } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isLoggedIn: {
                    read() {
                        return 'test';
                        // return isLoggedInVar();
                    },
                },
            },
        },
    },
});

export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem('token'));
