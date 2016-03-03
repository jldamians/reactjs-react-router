import React, { Component } from 'react'
import { Link } from 'react-router'
import List from './list'

var _backends = [
  { id: 1, name: "Rolando Tigre Sipion1", title: "Back-End", department: "systems", picture: "img2.png" },
  { id: 2, name: "Rolando Tigre Sipion2", title: "Back-End", department: "systems", picture: "img2.png" },
  { id: 3, name: "Rolando Tigre Sipion3", title: "Back-End", department: "systems", picture: "img2.png" },
  { id: 4, name: "Rolando Tigre Sipion4", title: "Back-End", department: "systems", picture: "img2.png" },
  { id: 5, name: "Rolando Tigre Sipion5", title: "Back-End", department: "systems", picture: "img2.png" }
]

class Backends extends Component{
	render() {
		return (
			<section>
				<h2>BACKENDS</h2>

				<List listado={_backends} />
				
				<Link to='/'>{'Welcome'}</Link>
				<br />
				<Link to='/developer'>{'Developer'}</Link>
				<br />
				<Link to='/frontend'>{'Frontend'}</Link>
				<br />
			</section>
		)
	}
}

export default Backends