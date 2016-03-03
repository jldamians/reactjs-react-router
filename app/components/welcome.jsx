import React, { Component } from 'react';
import { Link } from 'react-router';

class Welcome extends Component{
	render(){
		return(
			<section>
				<h3>
					<span>¡Bienvenido!</span>
				</h3>
				
				<Link to='/developer'>{'Developer'}</Link> 
				<br />
				<Link to='/backend'>{'Backend'}</Link> 
				<br />
				<Link to='/frontend'>{'Frontend'}</Link>
				<br />
			</section>
		);
	}
}

export default Welcome;