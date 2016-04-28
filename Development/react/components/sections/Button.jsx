import React, {Component} from 'react';
import {Link} from 'react-router';

class Btn extends Component{
	constructor(props){
		super(props);

		this.createBtn = this.createBtn.bind(this);
	}

	createBtn(){
		var cls = (this.props.inverse=="true") ? "button inverse" : "button";

		if (this.props.href){
			return(
				<Link className={cls} to={this.props.href}>
					<span>{this.props.title}</span>
					<span className="over">{this.props.title}</span>
				</Link>
			);
		} else {
			return(
				<a className={cls} onClick={this.props.clickHandle}>
					<span>{this.props.title}</span>
					<span className="over">{this.props.title}</span>
				</a>
			);
		}
	}

	render(){
		var btnType = function(that){

		};

		return (
			<div className="button-container">
				{ this.createBtn() }
			</div>
		);
	}
};

export default Btn;
