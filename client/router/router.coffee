Router.configure
  layoutTemplate: "layout"

Router.map ->
  @route "home",

    ###########   MADISONASFUCK   ##########
    path: "/madisonasfuck"
    onBeforeAction: ->
      Session.set "route", "madisonasfuck"
    waitOn: ->
      Meteor.subscribe "posts", "madisonasfuck"
      Meteor.subscribe "comments", "madisonasfuck"

  @route "purge",
    path: "/madisonasfuck/purge"
    onBeforeAction: ->
      Session.set "route", "madisonasfuck"

  ###########   INFLUENCE   ##########
  @route "home",
    path: "/influence"
    onBeforeAction: ->
      Session.set "route", "influence"
    waitOn: ->
      Meteor.subscribe "posts", "influence"
      Meteor.subscribe "comments", "influence"

  @route "purge",
    path: "/influence/purge"
    onBeforeAction: ->
      Session.set "route", "influence"

  @route "purge",
    path: "/purge"