Template['layout'].helpers({
  menuShow: function () {
    return Session.get('menuShow');
  },
  menuActive: function () {
    return Session.get('menuActive') ? 'active' : '';
  },
  animateClass: function () {
    return Session.get('menuActive') ? 'fadeIn' : 'fadeOut';
  },
  iconClass: function () {
    return Session.get('menuActive') ? 'fa-bars' : 'fa-times';
  }
});
