Template.home.events({
	'click #submit-btn': function(event) {
		Session.set('submit-pressed', true);
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