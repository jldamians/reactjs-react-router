import React from 'react'
import Avatar from './avatar'

class Row extends React.Component{
	render() {
		return(
			<li className='media'>
				<Avatar picture={this.props.picture} />
				<div className='media-body'>
					<h4>{this.props.name} / {this.props.title}</h4>
					<p>
						<span className='label label-info'>{this.props.departament}</span>
					</p>
				</div>
				<hr/>
			</li>
		)
	}
}

export default Row