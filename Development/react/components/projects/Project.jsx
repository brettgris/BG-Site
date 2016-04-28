import React, {Component} from 'react';

import SectionHeader from '../sections/SectionHeader.jsx';

import ProjectFilter from './children/ProjectFilter.jsx';
import ProjectList from './children/ProjectList.jsx';

//"I create engaging digital user experiences that tell your brands story"
//"There is nothing like the satisfaction of rolling out a new project, and I would like to invite you to have a look at some of my recent projects that I am excited to share with you."

class Project extends Component {
	render(){
		return(
			<div id="work" className="section">
				<div className="section-content">
					<SectionHeader
						headline="Engaging digital experiences that tell a story"
						description="There is nothing like the satisfaction of rolling out a new project, and I would like to invite you to have a look at some of my recent projects that I am excited to share with you."
					/>
					<ProjectFilter />
					<ProjectList />
				</div>
			</div>
		);
	}
};

export default Project;
