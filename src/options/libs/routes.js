import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App.jsx';
import Home from '../pages/Home.jsx';
import Products from '../pages/Products.jsx';

import paths from '../libs/routes_path.js';

export default (
<Route path={paths.index} component={App}>
    <IndexRoute component={Home}/>
    <Route path={paths.products} component={Products}/>
</Route>
)