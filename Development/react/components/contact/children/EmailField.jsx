import React, {Component} from 'react';
import validator from 'validator';

class EmailField extends Component {
	constructor(props){
		super(props);

		this.state = {
			valid: "",
			value: ""
		}

		this.onChange = this.onChange.bind(this);
		this.onUpdateState = this.onUpdateState.bind(this);
	}

	onChange(e){
		this.setState({
			value: e.target.value,
			valid: ""
		});
	}

	onUpdateState(){
		var v = (validator.isEmail(this.state.value)) ? v="pass" : v="fail";
		this.setState({
			valid: v
		});

		if (v=="pass") {
			return true;
		} else {
			return false;
		}
	}

	render(){
		var cls = "form-group form-group-lg";
		var formClass, glpCls;

		if (this.state.valid=="pass") {
			formClass = cls+" has-success has-feedback";
			glpCls = "glyphicon glyphicon-ok form-control-feedback";
		} else if (this.state.valid=="fail") {
			formClass = cls+" has-error has-feedback";
			glpCls = "glyphicon glyphicon-remove form-control-feedback";
		} else {
			formClass = cls;
			glpCls = "";
		}

		return (
			<div className={formClass}>
				<input className="form-control" type="text" onChange={this.onChange} value={this.state.value} placeholder={this.props.placeholder} />
				<span className={glpCls}></span>
			</div>
		);
	}
};

export default EmailField;
