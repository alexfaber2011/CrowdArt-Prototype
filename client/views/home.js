Template.home.events({
	'click #submit-btn': function(event) {
		Session.set('submit-pressed', true);
	},

	'submit form' : function(event, template) {
		event.preventDefault();
		var name = $('#submitPost').val();
		if(name)
		{
			Posts.insert({
				name: name, 
				date: new Date(),
				votes: 0,
				comments: []
			});
		} else {
			alertify.error("New submission cannot be empty!");
			return;
		}
		Session.set('submit-pressed', false);
	}
});

Template.home.helpers({
	submitBox: function () {
		if(Session.get('submit-pressed'))
		{
			return true;
		} else {
			return false;
		}
	},
	comments: function () {
		return this._id.comments;
	}
});