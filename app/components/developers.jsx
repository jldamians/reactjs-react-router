import React from 'react'
import ReactDOM from 'react-dom'
import List from './list'

var developers = [
  { id: 1, name: "Pisfil Puemape Armando1", title: "Developer", department: "systems", picture: "img1.jpg" },
  { id: 2, name: "Pisfil Puemape Armando2", title: "Developer", department: "systems", picture: "img1.jpg" },
  { id: 3, name: "Pisfil Puemape Armando3", title: "Developer", department: "systems", picture: "img1.jpg" },
  { id: 4, name: "Pisfil Puemape Armando4", title: "Developer", department: "systems", picture: "img1.jpg" },
  { id: 5, name: "Pisfil Puemape Armando5", title: "Developer", department: "systems", picture: "img1.jpg" }
]

ReactDOM.render(<List listado={developers} />, document.getElementById('app'))

