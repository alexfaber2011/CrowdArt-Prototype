Template.insertPostForm.events({
	'submit form' : function(event, template) {
        var route = Session.get("route");
		event.preventDefault();
		var name = $('#submitPost').val();
        if(name.length < 40) {
            if (name) {
                Posts.insert({
                    name: name,
                    date: new Date(),
                    votes: 0,
                    comments: [],
                    route: route
                });
            } else {
                alertify.error("New submission cannot be empty!");
            }
            Session.set('submit-pressed', false);
        }
        else{
            alertify.error("Submission must be less than 40 characters");
        }

	}
})