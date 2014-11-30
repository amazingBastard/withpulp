Template.home.helpers({
  'sections': function() {
    return Sections.find();
  }
});

Template.home.events({
});

Template.home.rendered = function () {
  // @see: http://stackoverflow.com/questions/5284814/jquery-scroll-to-div
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }

    return true;
  });

  var $document = $(document),
  $element = $('.layout'),
  scrolled = 'scrolled';

  $document.scroll(function() {
    if ($document.scrollTop() >= 800) {
      // user scrolled 50 pixels or more;
      // do stuff
      $element.addClass(scrolled);
    } else {
      $element.removeClass(scrolled);
    }
  });
};
