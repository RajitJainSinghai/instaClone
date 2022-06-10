import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import PostInst from './containers/PostInst';
import Signup from './containers/Signup';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/postinst'} component={PostInst} />
                <Route exact path={'/Signup'} component={Signup} />
            </Switch>
        </>
    );
};
export default Router;
