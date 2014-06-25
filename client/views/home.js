Template.home.events({
	'click #submit-btn': function(event) {
		Session.set('submit-pressed', true);
	},
	'click #ok': function(event) {
		event.preventDefault();
		Session.set('submit-pressed', false);
		name = home.find("input[name=name]");
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