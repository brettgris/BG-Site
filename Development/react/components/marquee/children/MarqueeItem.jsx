import React,{Component} from 'react';
import {Link} from 'react-router';

import Button from '../../sections/Button.jsx';

class MarqueeItem extends Component{
	render(){
		if (!this.props.data) return null;
		var taStyle = {
			"backgroundImage": `url(${this.props.data.titleart})`
		}
		return(
			<div className="item">
				<Link to={"/project/"+this.props.data.safename}>
					<div className="ta" style={taStyle}></div>
					<h3>{this.props.data.title}</h3>
				</Link>
			</div>
		);
	}
};

export default MarqueeItem;
