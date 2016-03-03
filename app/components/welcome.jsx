import React, { Component } from 'react';
import { Link } from 'react-router';

//see references:
	// https://shellmonger.com/2016/02/05/an-introduction-to-react-router/
	// http://rockyj.in/2015/12/31/react_routers_comparison.html

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