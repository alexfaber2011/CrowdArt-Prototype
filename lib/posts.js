PostsSchema = new SimpleSchema({
	name: {
		type: String,
		max: 500
	},
    votes: {
        type: Number,
        min: 0
    },
	date: {
		type: Date,
		optional: true
	},
	comments: {
		type: [Object],
		optional: true,
		blackbox: true
	}
});

Posts = new Meteor.Collection('posts', {schema: PostsSchema});
Posts.allow({
	insert: function(){ return true },
	update: function(){ return true },
	remove: function(){ return false }
});