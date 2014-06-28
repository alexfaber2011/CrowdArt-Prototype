Meteor.startup ->
  if Posts.find().count() is 0
    Posts.insert
      name: "Let's paint his face orange"
      votes: 0
      date: new Date()
      comments: []
    Posts.insert
      name: "I think it would be neat to tie a theme around happiness."
      votes: 0
      date: new Date()
      comments: []
