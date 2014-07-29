Meteor.publish("posts", function(route){
	return Posts.find({route: route});
});