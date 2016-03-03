import React from 'react'
import ReactDOM from 'react-dom'
import List from './list'

var backends = [
  { id: 1, name: "Rolando Tigre Sipion1", title: "Back-End", department: "systems", picture: "img2.png" },
  { id: 2, name: "Rolando Tigre Sipion2", title: "Back-End", department: "systems", picture: "img2.png" },
  { id: 3, name: "Rolando Tigre Sipion3", title: "Back-End", department: "systems", picture: "img2.png" },
  { id: 4, name: "Rolando Tigre Sipion4", title: "Back-End", department: "systems", picture: "img2.png" },
  { id: 5, name: "Rolando Tigre Sipion5", title: "Back-End", department: "systems", picture: "img2.png" }
]

ReactDOM.render(<List listado={backends} />, document.getElementById('app'))

