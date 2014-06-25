Meteor.publish("posts", function(){
	Posts.find({});
});

Meteor.publish("comments", function(){
	Comments.find({});
});
