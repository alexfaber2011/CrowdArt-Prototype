Meteor.startup ->
  if Posts.find().count() is 0
    Posts.insert
      name: "This is an idea, you should upvote it"
      votes: 0
      date: new Date()
    Posts.insert
      name: "We should paint their pants yellow"
      votes: 1
      date: new Date()