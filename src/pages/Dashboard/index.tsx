import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import { Footer } from 'components';

const Dashboard: React.FC = () => {
    return ( 
        <Fragment>
            <Router primary={false} component={Fragment}>
                {/* <Launches path="/" />
                <Launch path="launch/:launchId" />
                <Cart path="cart" />
                <Profile path="profile" /> */}
            </Router>
        <Footer />
        </Fragment>
    );
}
 
export default Dashboard;