Router.configure
  layoutTemplate: "layout"

Router.map ->
  @route "home",
    path: "/"
    waitOn: ->
      Meteor.subscribe "posts"
      Meteor.subscribe "comments"

  @route "purge",
    path: "/purge"