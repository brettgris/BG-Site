import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions/actions.jsx';

import NavBar from '../components/navigation/NavBar.jsx';

class BasePage extends Component{
	constructor(props){
		super(props);

		this.props.fetchData();
	}

	render(){
		return (
			<div id="BGPortfolio">
				<NavBar />
				{this.props.children}
			</div>
		);
	}
};

function mapDispatchToProps(dispatch){
	return bindActionCreators( {fetchData}, dispatch);
}

export default connect(null, mapDispatchToProps)(BasePage);
