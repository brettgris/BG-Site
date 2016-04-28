import React, {Component} from 'react';
import _ from 'lodash';
import Button from '../../sections/Button.jsx';

class OtherProjects extends Component{
	constructor(props){
		super(props);

		this.createOthers = this.createOthers.bind(this);
	}
	createOthers(){
		var notviewed = _.filter(this.props.data, function(o){
			return (!o.viewed);
		});
		var safename = this.props.current.safename;
		var viewed = _.filter(this.props.data, function(o){
			return (o.viewed&&o.safename!=safename)
		});

		notviewed = _.shuffle(notviewed);
		viewed = _.shuffle(viewed);

		var projects = _.union(notviewed,viewed);
		projects = _.take(projects,4);

		return projects.map(function(item,key){
			var bgStyle = {
				"backgroundImage": `url(${item.background})`
			}
			var taStyle = {
				"backgroundImage": `url(${item.titleart})`
			}
			return (
				<div className="item col-md-3 col-sm-6" key={"other"+key} style={bgStyle}>
					<div className="copy">
						<div className="content-container">
							<div className="ta" style={taStyle}></div>
							<h3 className="title">{item.title}</h3>
							<Button title="View Project" href={"/project/"+item.safename}inverse="true" />
						</div>
					</div>
				</div>
			)
		}.bind(this));
		console.log (projects);
	}

	render(){
		return (
			<div className="paging">
				<h3 className="othertitle center">WHAT'S NEXT</h3>
				<div className="other">
					{this.createOthers()}
					<div className="clear"></div>
				</div>

				<Button title="Close Project" href="/" />
			</div>
		);
	}
};

export default OtherProjects;
