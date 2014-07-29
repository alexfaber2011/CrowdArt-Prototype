Meteor.methods
  purge: (route) ->
    Posts.remove({route: route})