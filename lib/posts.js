PostsSchema = new SimpleSchema({
	name: {
		type: String,
		max: 500
	},
	date: {
		type: Date,
		optional: true
	}
});

Posts = new Meteor.Collection('posts', {schema: PostsSchema});
Posts.allow({
	insert: function(){ return true },
	update: function(){ return false },
	remove: function(){ return false }
});
