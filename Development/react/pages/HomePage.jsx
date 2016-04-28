import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setProject} from '../actions/actions.jsx';

import Marquee from '../components/marquee/Marquee.jsx';
import Project from '../components/projects/Project.jsx';
import Contact from '../components/contact/Contact.jsx';

class HomePage extends Component{
	componentDidMount(){
		this.props.setProject(null);
	}

	render(){
		return (
			<div id="#wrapper" className="page">
				<Marquee />
				<Project />
				<Contact />
			</div>
		)
	}
};

function mapDispatchToProps(dispatch){
	return bindActionCreators( {setProject}, dispatch);
}

export default connect(null,mapDispatchToProps)(HomePage);
