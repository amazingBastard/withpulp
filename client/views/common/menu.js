Template.menu.rendered = function () {
  // @see: http://stackoverflow.com/questions/5284814/jquery-scroll-to-div
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        Session.set('menuActive', false);
        Session.set('menuShow', false);

        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }

    return true;
  });
}

Template['menu'].helpers({
  animateClass: function () {
    return Session.get('menuActive') ? 'fadeIn' : 'fadeOut';
  },
  cases: function () {
    return Cases.find();
  }
});
