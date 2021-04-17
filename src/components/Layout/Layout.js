import React from 'react';
import Header from '../Header/Header';

import {Switch, Route} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Menu from '../../containers/Menu/Menu';
import Checkout from '../../containers/Checkout/Checkout';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Orders from '../../containers/Orders/Orders';

const Layout = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/orders" component={Orders} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/menu" component={Menu} />
                <Route path="/" component={LandingPage} />
            </Switch>
            <ToastContainer autoClose={2500} />
        </div>
    );
}
 
export default Layout;