import React, { Component } from 'react'
import List from './list'

var _frontends = [
  { id: 1, name: "Oscar Capuñay Uceda1", title: "Front-End", department: "systems", picture: "img3.png" },
  { id: 2, name: "Oscar Capuñay Uceda2", title: "Front-End", department: "systems", picture: "img3.png" },
  { id: 3, name: "Oscar Capuñay Uceda3", title: "Front-End", department: "systems", picture: "img3.png" },
  { id: 4, name: "Oscar Capuñay Uceda4", title: "Front-End", department: "systems", picture: "img3.png" },
  { id: 5, name: "Oscar Capuñay Uceda5", title: "Front-End", department: "systems", picture: "img3.png" }
]

class Frontends extends Component {
	render() {
		return <List listado={_frontends} />
	}
}

export default Frontends