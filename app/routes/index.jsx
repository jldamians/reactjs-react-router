'use strict';

import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Welcome from '../components/welcome'
import Backends from '../components/backends'
import Frontends from '../components/frontends'
import Developers from '../components/developers'    

let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Welcome} />
        <Route path='developer' component={Developers} />
        <Route path='backend' component={Backends} />
        <Route path='frontend' component={Frontends} />
    </Router>
);

export default routes

