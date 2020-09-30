import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Insert from './pages/insert';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/insert" component={Insert}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;