Template.postList.helpers
  posts: ->
    Posts.find {},
      sort:
        votes: -1