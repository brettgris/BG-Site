import React, {Component} from 'react';
import Btn from '../../sections/Button.jsx';

class ProjectItem extends Component{
	render() {
		var bgStyle = {
			"backgroundImage": `url(${this.props.data.background})`
		};

		var taStyle = {
			"backgroundImage": `url(${this.props.data.titleart})`
		}

		var imgStyle ={
			"backgroundImage": `url(${this.props.data.projectimage})`
		}

		var copyClass = "copy col-sm-10 col-sm-offset-1 col-md-offset-0 col-md-5";
		var altcopy = (this.props.index%2==0) ? copyClass+" col-md-push-7" : copyClass;
		var imgClass = "image col-md-7 hidden-sm";
		var altimage = (this.props.index%2==0) ? imgClass+" col-md-pull-5" : imgClass;

		return (
			<div className="project-item" style={bgStyle}>
				<div className="overlay"></div>
				<div className="container">
					<div className="details row">
						<div className={altcopy}>
							<div className="project-ta" style={taStyle}></div>
							<h3 className="center">{this.props.data.title}</h3>
							<p>{this.props.data.description}</p>
							<Btn title="View Project" href={"/project/"+this.props.data.safename} inverse="true" />
						</div>
						<div className={altimage}>
							<div className="project-image" style={imgStyle}></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default ProjectItem;
