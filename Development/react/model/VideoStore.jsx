var Reflux = require('reflux');
var videojs = require('video.js');
var VideoActions = require('./VideoActions');

var VideoStore = Reflux.createStore({
	listenables: [VideoActions],
	video: null,
	createVideo: function(s,img){
		if (this.video!=null) this.video.dispose();

		this.video = videojs(s, {
			"controls": false,
			"preload": true,
			"poster": img
		});
		
		this.triggerUpdate();
	},
	triggerUpdate: function(){
		this.trigger('change', this.video);
	}
});

module.exports = VideoStore;