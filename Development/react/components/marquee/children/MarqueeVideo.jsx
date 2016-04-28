import React, {Component} from 'react';
import videojs from 'video.js';

class MarqueeVideo extends Component{
	constructor(props){
		super(props);

		this.video = null;
		this.path = null;

		this.loadVideo = this.loadVideo.bind(this);
		this.loadAndPlay = this.loadAndPlay.bind(this);
	}

	componentDidMount(){
		this.path = this.props.data.video;
		this.loadVideo();
	}

	componentWillUpdate(n){
		if (n.data.video!=this.path) {
			this.path = n.data.video;
			this.loadVideo();
		}
	}

	loadVideo(path){
		if (!this.video) {
			var play = this.loadAndPlay;
			this.video = videojs('videomarquee', {}, function(){
				play(this);
			});
		} else this.loadAndPlay(this.video);
	}

	loadAndPlay(player){
		player.off("ended",this.props.handleComplete);

		player.src([
			{type: "video/mp4", src: this.path}
		]);
		player.volume(0);
		player.play();

		player.on("ended", this.props.handleComplete);
	}

	componentWillUnmount(){
		videojs('videomarquee').dispose();
	}

	render(){
		return (
			<div className="videoplayer">
				<video id="videomarquee" className="video-js vjs-default-skin vjs-fullscreen" width="auto" height="auto" >
					<p className="vjs-no-js">VIDEO</p>
				</video>
			</div>
		);
	}
};

export default MarqueeVideo;
