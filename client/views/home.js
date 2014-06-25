Template.home.events({
	'click #submit-btn': function(event) {
		Session.set('submit-pressed', true);
	},
	'submit form' : function(event, template) {
		event.preventDefault();
		Session.set('submit-pressed', false);
		var name = $('#submitPost').val();
		Posts.insert({
			name: name, 
			date: new Date(),
			votes: 0,
			comments: {}
		});
	}
})

Template.home.helpers({
	submitBox: function () {
		if(Session.get('submit-pressed'))
		{
			return true;
		} else {
			return false;
		}
	}
});