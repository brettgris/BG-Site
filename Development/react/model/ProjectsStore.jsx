var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions');

var _ = require('underscore');

//http://voyagecreative.com/?json=get_posts&post_type=project

var ProjectsStore = Reflux.createStore({
	listenables: [Actions],
	getProjects: function(id){
		HTTP.get('data/projects.json').then(function(data){
			this.projects = {
				all: data.posts,
				filtered: data.posts
			}
			if(id) this.updateCurrent(id);
			this.filterMarquee();
			this.triggerUpdate();
		}.bind(this));
	},
	filterMarquee: function(){
		this.projects.marquee = _.filter( this.projects.all, function(item){
			return item.custom_fields.marquee_include[0]==1;
		});
	},
	updateFilter: function(filter){
		this.projects.filtered = _.filter( this.projects.all, function(item){
			return item.custom_fields.project_types[0].indexOf(filter) > 0
		});
		this.triggerUpdate();
	},
	updateCurrent: function(id){
		if (this.projects==undefined) this.getProjects(id);
		else {
			var p = _.find(this.projects.all, function(item){
				return item.id==id;
			})

			if (p) this.projects.current = p;
			this.triggerUpdate();
		}
	},
	triggerUpdate: function(){
		this.trigger('change', this.projects);
	}
});

module.exports = ProjectsStore;