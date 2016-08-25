import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setProject} from '../actions/actions.jsx';

import Detail from '../components/detail/Detail.jsx';

class ProjectPage extends Component{
	constructor(props){
		super(props);
		this.setProject = this.setProject.bind(this);
	}

	componentDidMount(){
		if (this.props.projects&&this.props.params.project){
			this.setProject(this.props.projects, this.props.params.project);
		}
	}

	shouldComponentUpdate(n){
		if (n.projects && n.params.project){
			this.setProject(n.projects, n.params.project);
		}

		return true;
	}

	setProject(projects,safename){
		var n;
		var project = projects.find( function(v,k){
			n = k;
			return (v.safename==safename);
		});

		projects[n].viewed = true;

		if (project) this.props.setProject(project);
	}

	render(){
		return (
			<div id="#wrapper" className="page">
				<Detail />
			</div>
		)
	}
};

function mapStateToProps(state) {
	return {
		projects: (state.data) ? state.data['projects'] : null
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {setProject}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectPage);
