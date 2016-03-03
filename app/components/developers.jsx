import React, { Component } from 'react'
import { Link } from 'react-router'
import List from './list'

var _developers = [
  { id: 1, name: "Pisfil Puemape Armando1", title: "Developer", department: "systems", picture: "img1.jpg" },
  { id: 2, name: "Pisfil Puemape Armando2", title: "Developer", department: "systems", picture: "img1.jpg" },
  { id: 3, name: "Pisfil Puemape Armando3", title: "Developer", department: "systems", picture: "img1.jpg" },
  { id: 4, name: "Pisfil Puemape Armando4", title: "Developer", department: "systems", picture: "img1.jpg" },
  { id: 5, name: "Pisfil Puemape Armando5", title: "Developer", department: "systems", picture: "img1.jpg" }
]

class Developers extends Component {
	render() {
		return (
			<section>
				<h2>DEVELOPERS</h2>
				
				<List listado={_developers} />

				<Link to='/'>{'Welcome'}</Link>
				<br />
				<Link to='/backend'>{'Backend'}</Link>
				<br />
				<Link to='/frontend'>{'Frontend'}</Link>
				<br />
			</section>
		)
	}
}

export default Developers


