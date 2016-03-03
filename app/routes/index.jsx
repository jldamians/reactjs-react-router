'use strict';

import React, { Component } from 'react'
import { Router, Route } from 'react-router'

import Welcome from '../components/welcome'
import Backends from '../components/backends'
import Frontends from '../components/frontends'
import Developers from '../components/developers'    

export default () => {    
    return (
        <Router>
            <Route path='/' component={Welcome}>
                <Route path='developer' component={Developers} />
                <Route path='frontend' component={Frontends} />
                <Route path='backend' component={Backends} />
            </Route>
        </Router>
    )
}

