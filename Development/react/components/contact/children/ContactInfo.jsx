import React,{Component} from 'react';

class ContactInfo extends Component{
	render(){
		return(
			<div className="contact-info">
				<h4 className="center inverse">PHONE <a href="tel:303-884-4919">303.884.4919</a></h4>
				<h4 className="center inverse">EMAIL <a href="mailto:brettgrisinger@gmail.com">brettgrisinger@gmail.com</a></h4>
				<div className="social">
					<a href="pdf/resume.pdf" target="_blank" className="resume"><span>Resume</span></a>
					<a href="https://www.linkedin.com/in/brett-grisinger-95989523
" target="_blank" className="linkedin"><span>LinkedIn</span></a>
					<a href="https://github.com/brettgris" target="_blank" className="github"><span>Github</span></a>
				</div>
			</div>
		);
	}
};

export default ContactInfo;
