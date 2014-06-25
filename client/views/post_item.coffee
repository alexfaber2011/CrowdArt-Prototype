Template.postItem.events
  "click .upvote": ->
    Posts.update
      _id: @._id
    ,
      $inc:
        votes: 1
