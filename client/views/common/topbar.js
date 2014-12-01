Template.topbar.created = function() {
  Session.set('menuActive', false);
  Session.set('menuShow', false);
}

Template['topbar'].events({
  'click .ui.topbar .menu .icon' : function () {
    var menuShow = Session.get('menuShow');

    Session.set('menuActive', !Session.get('menuActive'));

    setTimeout(function () {
      Session.set('menuShow', !Session.get('menuShow'));
    }, 600);
  }
});
