import React,{Component} from 'react';

import SectionHeader from '../sections/SectionHeader.jsx';
import ContactInfo from './children/ContactInfo.jsx';
import ContactForm from './children/ContactForm.jsx';


//headline="contact <span>brett</span>"
//description="Let&#8127;s get the ball rolling. I am always interested in collaborating on new projects and seeing them come to life. Reach out by phone or email and tell me about your project."

class Marquee extends Component{
	render(){
		return(
			<div className="section" id="contact">
				<div className="section-content">
					<SectionHeader
						additionalClasses="inverse"
						headline="GET IN TOUCH"
						description="Let&#8127;s get the ball rolling. I am always interested in collaborating on new projects and seeing them come to life. Reach out by phone or email and tell me about your project."
					/>
					<div className="container contact-details">
						<div className="row">
							<div className="col-sm-6 col-lg-5 col-lg-offset-1">
								<ContactInfo />
							</div>
							<div className="col-sm-6 col-lg-5">
								<ContactForm />
							</div>
						</div>
					</div>
					<div className="contact-copyright">
						<div className="container">
							<p className="copyright"><span>&copy; 2016 Brett Grisinger. All rights reserved.</span></p>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Marquee;
