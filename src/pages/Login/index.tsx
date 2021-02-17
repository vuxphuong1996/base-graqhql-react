import { gql, useMutation } from '@apollo/client';
import { isLoggedInVar } from '../../cache';
import { RouteComponentProps } from '@reach/router';
// import * as LoginTypes from '../__generated__/login';
import { LoginForm, Loading } from 'components';

interface LoginProps extends RouteComponentProps {}

export const LOGIN_USER = gql`
    mutation Login($email: String!) {
        login(email: $email) {
            id
            token
        }
    }
`;

const Login: React.FC<LoginProps> = () => {
    const [login, { loading, error }] = useMutation(LOGIN_USER, {
        onCompleted({ login }) {
            if (login) {
                localStorage.setItem('token', login.token as string);
                localStorage.setItem('userId', login.id as string);
                isLoggedInVar(true);
            }
        },
    });

    if (loading) return <Loading />;
    if (error) return <p>An error occurred</p>;

    return <LoginForm login={login} />;
};

export default Login;
