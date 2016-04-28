import React, {Component} from 'react';

class DetailMarquee extends Component {
	render(){
		var bgStyle = {
			"backgroundImage": `url(${this.props.data.background})`
		};

		return (
			<div className="marquee" style={bgStyle}>
				<div className="gradient"></div>
			</div>
		);
	}
};

export default DetailMarquee;
