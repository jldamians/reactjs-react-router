import React, {Component} from 'react'
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
		return <List listado={_developers} />
	}
}

export default Developers


