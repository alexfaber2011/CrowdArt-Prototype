Template.purge.events
  'click button': ->
    bootbox.confirm "PRESSING THIS BUTTON DELETES EVERYTHING OUT OF THE DATABASE.  ARE YOU SURE YOU WANT TO DO THIS?", (result) ->
      if result is yes
        Meteor.call "purge", Session.get "route"