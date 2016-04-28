import React, {Component} from 'react';
import _ from 'lodash';

class DetailFeatures extends Component{
	createFeatures(){
		return this.props.data.features.map(function(item,key){
			return (
				<p key={"features"+key} className="featurecopy">
					{item}
				</p>
			)
		}.bind(this));
	}

	createLinks(){
		if (this.props.data.link){
			var tablet = _.find(this.props.data.filters, function(v){
				return (v=="tablet")
			});
			var mobile = _.find(this.props.data.filters, function(v){
				return (v=="mobile")
			});
			return (
				<div className="col-md-3 col-md-offset-4 col-sm-6">
					<h3 className="featurecopy">SEE IT LIVE</h3>
					<a href={this.props.data.link} target="_blank">LAUNCH WEBSITE</a>
 					{(!tablet)?(<p  className="featurecopy">(NOT TABLET FRIENDLY)</p>):null}
					{(!mobile)?(<p className="featurecopy">(NOT MOBILE FRIENDLY)</p>):null}
				</div>
			);
		}
	}

	render(){
		return (
			<div className="features">
				<div className="container">
					<div className="row">
						<div className="col-md-5 col-sm-6">
							<h3 className="featurecopy">FEATURES</h3>
							{this.createFeatures()}
						</div>
						{this.createLinks()}
					</div>
				</div>
			</div>
		);
	}
};

export default DetailFeatures;
