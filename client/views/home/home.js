Template.home.helpers({
  'sections': function() {
    return Sections.find();
  }
});

Template.home.rendered = function () {
  $('.topbar').show();

  var $document = $(document),
  $element = $('.layout'),
  scrolled = 'scrolled';

  $document.scroll(function() {
    if ($document.scrollTop() >= 800) {
      $element.addClass(scrolled);
    } else {
      $element.removeClass(scrolled);
    }
  });
};
