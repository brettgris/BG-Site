import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ProjectItem from './ProjectItem.jsx';

class ProjectList extends Component {
	createProjects(){
		return this.props.projects.map( function(item,key) {
			return (
         	<ProjectItem data={item} key={"project"+key} index={key} />
         );
		}.bind(this) )
	}

	render(){
		if (!this.props.projects) return <div className="project-list loading"></div>
		return (
			<div className="project-list">
				<ReactCSSTransitionGroup transitionName="project" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
					{this.createProjects()}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
};

function mapStateToProps(state) {
	var projects = (state.data) ? state.data['projects'] : null;
	var filter = (state.filter) ? state.filter : null;

	if (filter) {
		projects = _.filter(projects, function(v,k){
			return (_.find(v.filters,function(f){
				return f==filter;
			}));
		} );
	}

	return {
		projects: projects
	};
}

export default connect(mapStateToProps)(ProjectList);
