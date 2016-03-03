'use strict'

import React from 'react'
import { render } from 'react-dom'

import { browserHistory, Router, Route, Link } from 'react-router'

import Welcome from './components/welcome'
import Backends from './components/backends'
import Frontends from './components/frontends'
import Developers from './components/developers'

render((
	<Router history={browserHistory}>
		<Route path='/' component={Welcome}>
			<Route path='developers' component={Developers} />
			<Route path='frontends' component={Frontends} />
			<Route path='backends' component={Backends} />
		</Route>
	</Router>
), document.getElementById('app'))

