import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setFitler} from '../../../actions/actions.jsx';

class ProjectFilter extends Component{
	constructor(props){
		super(props);

		this.state = {
			current: 0
		};

		this.changeFilter = this.changeFilter.bind(this);
	}

	createFilters(){
		return this.props.filters.map( function(item,key){
			var selected = (key==this.state.current) ? "selected" : "";
			return (
				<a className={selected} key={"filter"+key} onClick={ () => this.changeFilter(key) }>
					{item.title}
				</a>
			);
		}.bind(this));
	}

	changeFilter(n){
		var f = this.props.filters[n].val;
		this.props.setFitler(f);

		this.setState({
			current: n
		});
	}

	render(){
		if (!this.props.filters) return null;

		return(
			<div className="filter container">
				<div className="row">
					<div className="hidden-xs">
						<h5>FILTER</h5>
						<div>
							{ this.createFilters() }
						</div>
					</div>
				</div>
			</div>
		);
	}
};

function mapStateToProps(state) {
	return {
		filters: (state.data) ? state.data['filters'] : null
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {setFitler}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectFilter);
