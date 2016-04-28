import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import MarqueeIcon from './children/MarqueeIcon.jsx';
import MarqueeItem from './children/MarqueeItem.jsx';
import MarqueeVideo from './children/MarqueeVideo.jsx';

//
//<MarqueeList projects={this.state.projects} current={this.state.current} />
//<MarqueeVideo projects={this.state.projects} current={this.state.current} changeItem={this.changeItem} />

class Marquee extends Component {
	constructor(props){
		super(props);

		this.state = {
			current: 0
		}
		this.loaded = false;
		this.to = null;
		this.setTimer = this.setTimer.bind(this);
		this.nextItem = this.nextItem.bind(this);
		this.addVideo = this.addVideo.bind(this);
	}

	componentDidUpdate(){
		if (!this.loaded&&this.props.marquees) {
			this.loaded = true;
		}
	}

	setTimer(){
		this.to = setTimeout(this.nextItem,5000);
	}

	nextItem(){
		clearTimeout(this.to);

		var n = this.state.current+1;
		if (n==this.props.marquees.length) n=0;

		this.setState({
			current: n
		});

		if(!this.props.marquees[n].video) this.setTimer();
	}

	componentWillUnmount(){
		clearTimeout(this.to);
	}

	addVideo(){
		if(this.props.marquees[this.state.current].video) {
			return (
				<MarqueeVideo data={this.props.marquees[this.state.current]} handleComplete={this.nextItem} />
			);
		}
	}

	render(){
		if (!this.props.marquees || this.props.marquees.length<1) return null;

		var bgStyle = {
			"backgroundImage": `url(${this.props.marquees[this.state.current].background})`
		};

		return(
			<div id="marquee">
				<div className="slideshow">
					<MarqueeIcon />
					<div className="mask"></div>
					<div className="list hidden-xs">
						<h6 className="title">VIEW PROJECT</h6>
						<ReactCSSTransitionGroup transitionName="marquee" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
							<MarqueeItem key={"marquee"+this.state.current} data={this.props.marquees[this.state.current]} />
						</ReactCSSTransitionGroup>
					</div>
					<div className="gradient"></div>
					<div className="fixed" style={bgStyle}>
						<div className="wrapper">
							{this.addVideo()}
						</div>
					</div>
				</div>
			</div>
		);
	}
};

function mapStateToProps(state) {
	var marquees = (state.data) ? state.data['projects'] : null;

	marquees = _.filter(marquees, function(v){
			return (v.marquee)
	});

	return {
		marquees: marquees
	};
}

export default connect(mapStateToProps)(Marquee);
