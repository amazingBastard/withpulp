Template.home.helpers({
  'sections': function() {
    return Sections.find();
  }
});

Template.home.events({
});

Template.home.rendered = function () {
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
