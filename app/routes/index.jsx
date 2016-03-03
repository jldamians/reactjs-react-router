'use strict';

import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Welcome from '../components/welcome'
import Backends from '../components/backends'
import Frontends from '../components/frontends'
import Developers from '../components/developers'    

//see references:
    // https://shellmonger.com/2016/02/05/an-introduction-to-react-router/
    // http://rockyj.in/2015/12/31/react_routers_comparison.html

let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Welcome} />
        <Route path='developer' component={Developers} />
        <Route path='backend' component={Backends} />
        <Route path='frontend' component={Frontends} />
    </Router>
);

export default routes

