Template.postItem.events({
  "click .upvote": function(event) {
    $(event.currentTarget).prop('disabled', true);
      return Posts.update({
      _id: this._id
    }, {
      $inc: {
        votes: 1
      }
    });
  },

  'submit form' : function(event, template) {
    event.preventDefault();
    console.log(event.currentTarget);
    var name = $(event.currentTarget).find(".submitName").val();
    console.log(name);
    var comment = $(event.currentTarget).find(".submitComment").val();
    console.log(comment);
    if(name && comment)
    {
      var newComment = {
        name: name,
        comment: comment
      }
      Posts.update({_id: this._id}, { $push: { comments: newComment }});
      Session.set(this._id.concat('_submit'), false);
      Session.set('comment-name', name);
      $('.submitComment').val("");
    } else {
      alertify.error("New comment cannot be empty!");
    }
  },

  "click .comments" : function() {
    Session.set(this._id.concat('_comments'), !Session.get(this._id.concat('_comments')));
  },

  "click .new_comment" : function () {
    Session.set(this._id.concat('_submit'), !Session.get(this._id.concat('_submit')));
  }

});

Template.postItem.helpers({
	showComment: function () {
    if(Session.get(this._id.concat('_comments')))
  	{
  	    return true;
  	} else {
  	    return false;
  	}
	},
  showSubmit: function () {
    if(Session.get(this._id.concat('_submit')))
    {
      return true;
    } else {
     return false;
    }
  },
  comments: function() {
    return this.comments;
  },
  commentName: function () {
    return Session.get('comment-name');
  },

  commentCount: function() {
    return this.comments.length;
  }

});

