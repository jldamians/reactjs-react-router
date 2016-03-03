import React, { Component } from 'react'
import Row from './row'

class List extends Component{
    render(){
        return(
            <ul className='media-list'>
                {
                    this.props.listado.map((empleado) => {
                        //console.log(empleado)
                        return  <Row key={empleado.id} 
                                    name={empleado.name} 
                                    picture={empleado.picture} 
                                    title={empleado.title} 
                                    department={empleado.department} 
                                />
                    })
                }
            </ul>
        )
    }
}

export default List