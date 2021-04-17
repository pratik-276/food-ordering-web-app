import React from 'react';
import Header from '../Header/Header';

import {Switch, Route} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Menu from '../../containers/Menu/Menu';

const Layout = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/menu" component={Menu} />
                <Route path="/" component={LandingPage} />
            </Switch>
        </div>
    );
}
 
export default Layout;