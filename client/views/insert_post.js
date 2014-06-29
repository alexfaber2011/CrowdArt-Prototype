Template.insertPostForm.events({
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
		}
		Session.set('submit-pressed', false);
	}
})