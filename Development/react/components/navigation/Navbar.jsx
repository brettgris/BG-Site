import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class NavBar extends Component{
	render(){
		if (!this.props.projects) return null;

		var logoPosition = (this.props.current!=undefined) ? "project" : "home";
		var title = (this.props.current!=undefined) ? this.props.current.title : "";
		var animate = (this.props.current!=undefined) ? "animate" : "";
		var hide = (this.props.current) ? "" : " hide";

		var taStyle = {};
		if (this.props.current){
			taStyle["backgroundImage"] = `url(${this.props.current.titleart})`
		}


		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="row">
						<div className={"back"+hide}>
							<div className="col-sm-1">
								<Link to="/"><span className="glyphicon glyphicon-chevron-left"></span></Link>
							</div>
						</div>
						<div className={"wrapper"+" "+logoPosition}>
							<div className="logo">
								<Link to="/">&nbsp;</Link>
							</div>
							<div className={"ta hidden-xs "+animate}>
								<span style={taStyle}></span>
							</div>
							<div className={"title hidden-xs "+animate}>
								{title}
								<span>{title}</span>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
};

function mapStateToProps(state) {
	return {
		projects: (state.data) ? state.data['projects'] : null,
		current: (state.project) ? state.project : null
	};
}

export default connect(mapStateToProps)(NavBar);
