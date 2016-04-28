import React, {Component} from 'react';
import {connect} from 'react-redux';

import DetailMarquee from './children/DetailMarquee.jsx';
import DetailFeatures from './children/DetailFeatures.jsx';
import DetailCopy from './children/DetailCopy.jsx';
import OtherProjects from './children/OtherProjects.jsx';

class Detail extends Component{
	render(){
		if (!this.props.current || !this.props.projects) return null;

		return (
			<div className="project">
				<DetailMarquee data={this.props.current} />
				<DetailFeatures data={this.props.current} />
				<DetailCopy data={this.props.current} />
				<OtherProjects data={this.props.projects} current={this.props.current} />
			</div>
		);
	}
};

function mapStateToProps(state) {
	return {
		projects: (state.data) ? state.data['projects'] : null,
		current: (state.project) ? state.project : null
	};
}

export default connect(mapStateToProps)(Detail);
