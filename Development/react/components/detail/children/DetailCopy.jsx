import React, {Component} from 'react';

class DetailCopy extends Component {
	createCopyBlock(){
		return this.props.data.copy.map(function(item,key){
			return (
				<div key={"block"+key}>
					<h2>{item.title}</h2>
					<p>{item.copy}</p>
					<div className="desc-image">
						<img className="img img-responsive" src={item.image} />
					</div>
				</div>
			)
		})
	}

	render(){
		return (
			<div className="desc">
				<div className="container">
					{this.createCopyBlock()}
				</div>
			</div>
		);
	}
} ;

export default DetailCopy;
