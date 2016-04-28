import React, {Component} from 'react';

class SectionHeader extends Component{
	render(){
		return(
			<div className="section-header container">
				<div className="row">
					<div className="col-lg-10 col-lg-offset-1">
						<h2 className={"center "+this.props.additionalClasses}>{this.props.headline}</h2>
						<p className={this.props.additionalClasses}>{this.props.description}</p>
					</div>
				</div>
			</div>
		);
	}
};

export default SectionHeader;
