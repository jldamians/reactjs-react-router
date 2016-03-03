'use strict';

import React from 'react'
/*
 * hashHistory: si seteamos "history={hashHistory}", nuestras rutas
 * por ejemplo: /, /developer, /backend, /frontend
 * cada vez que accedamos a ellas tendremos un hash diferente
 * /?_k=1ygitw, /developer?_k=7txep7
 * estas url quedaran registrados en el historial
 */

//import { Router, Route, hashHistory } from 'react-router'

/*
 * Para quitar los hash de las url's ,
 * implementamos 'history', que nos permite indicar 
 * si las url se mostraran sin el hash que 'react-router' pone por defecto en las url's
 * { queryKey: false }
 * Entonces de esto '/developer?_k=7txep7' pasaremos a esto '/developers'
 */

 /*
  * history: Encapsula la navegacion entre las diferentes pantallas
  * y permite notificar a los oyentes cuando cambia la pantalla actual
  */

import { Router, Route, useRouterHistory } from 'react-router'

// see references: 
	// https://github.com/mjackson/history/blob/master/docs/GettingStarted.md
import { createHashHistory } from 'history'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

import Welcome from '../components/welcome'
import Backends from '../components/backends'
import Frontends from '../components/frontends'
import Developers from '../components/developers'    

//see references:
    // https://shellmonger.com/2016/02/05/an-introduction-to-react-router/
    // http://rockyj.in/2015/12/31/react_routers_comparison.html

let routes = (
    <Router history={appHistory}>
        <Route path='/' component={Welcome} />
        <Route path='developer' component={Developers} />
        <Route path='backend' component={Backends} />
        <Route path='frontend' component={Frontends} />
    </Router>
);

export default routes

