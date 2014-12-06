Template.footer.rendered = function () {
  $.get('http://ipinfo.io', function(response) {
    var city = response.city,
        region = response.region;
    Session.set('location', city + ', ' + region);
  }, 'jsonp');
};

Template['footer'].helpers({
  location: function () {
    return Session.get('location');
  }
});
