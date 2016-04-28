import React, {Component} from 'react';
import $ from 'jquery';

import Field from './Field.jsx';
import EmailField from './EmailField.jsx';
import FormArea from './FormArea.jsx';
import Button from '../../sections/Button.jsx';

class ContactForm extends Component {
	constructor(props){
		super(props);

		this.state = {
			submitted: false
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.formHandler = this.formHandler.bind(this);
	}

	handleSubmit(){
		var a = this.refs.fieldName.onUpdateState();
		var b = this.refs.fieldEmail.onUpdateState();
		var c = this.refs.fieldMessage.onUpdateState();

		if ( a && b && c ){
			var emaildata = {
				name: this.refs.fieldName.state.value,
				email: this.refs.fieldEmail.state.value,
				message: this.refs.fieldMessage.state.value
			};

			$.ajax({
				type: 'POST',
				url: 'scripts/mail.php',
				data: emaildata
			}).done(function(){
				this.setState({
					submitted: true
				});
			});
		}
	}

	handleReset(){
		this.setState({
			submitted: false
		});
	}

	formHandler(){
		if (!this.state.submitted) {
			return(
				<div className="contact-wrapper">
					<form name="contactform" id="contactform">
						<Field placeholder="Your Name" ref="fieldName" />
						<EmailField placeholder="Your Email" ref="fieldEmail" />
						<FormArea placeholder="Your Message" rows="7" cols="50" ref="fieldMessage" />
					</form>
					<Button title="Submit" inverse="true" clickHandle={this.handleSubmit} />
				</div>
			);
		} else {
			return (
				<h3 className="send-success center inverse">
					<span>Thank you for your message.</span><br />I will be in touch shortly.
					<Button title="Reset" inverse="false" clickHandle={this.handleReset} />
				</h3>
			);
		}
	}

	render(){
		return (
			<div className="contact-form">
				{ this.formHandler() }
			</div>
		);
	}
};

export default ContactForm;
