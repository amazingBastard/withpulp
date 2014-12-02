Template.footer.created = function () {
  $.get('http://ipinfo.io', function(response) {
    var city = response.city,
        region = response.region;
    Session.set('locationCity', city);
    Session.set('locationRegion', region);
    Session.set('location', city + ', ' + region);
  }, 'jsonp');

  Session.set('isActive', false);
  Session.set('showLogin', false);
};

Template['footer'].helpers({
  showLogin: function () {
    return Session.get('showLogin');
  },
  isActive: function () {
    return Session.get('isActive') ? 'active' : '';
  },
  animateClass: function () {
    return Session.get('isActive') ? 'fadeIn' : 'fadeOut';
  },
  iconClass: function () {
    return Meteor.user() ? 'user' : 'sign in';
  },
  locationCity: function () {
    return Session.get('locationCity');
  },
  locationRegion: function () {
    return Session.get('locationRegion');
  },
  location: function() {
    return Session.get('location');
  }
});

Template['footer'].events({
  'click .resize.button' : function () {
    var showLogin = Session.get('showLogin');

    Session.set('isActive', !Session.get('isActive'));

    setTimeout(function () {
      Session.set('showLogin', !Session.get('showLogin'));
    }, 600);
  },
  'click .log-out.button' : function () {
    Meteor.logout();
  }
});
