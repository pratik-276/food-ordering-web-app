import React from 'react';
import Header from '../Header/Header';

import {Switch, Route} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';

const Layout = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LandingPage} />
            </Switch>
        </div>
    );
}
 
export default Layout;