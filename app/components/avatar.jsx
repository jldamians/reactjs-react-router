import React from 'react';
//import React, { Component } from 'react';

class Avatar extends React.Component {
//class Avatar extends Component{
	render(){
		return(
			<figure className="media-left">
				<img className="media-object" width="64px" src={`public/img/${this.props.picture}`} />
			</figure>
		);
	}
}

export default Avatar;