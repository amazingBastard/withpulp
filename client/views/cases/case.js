Template.case.rendered = function () {
  $('.topbar').hide();

  Session.set('menuActive', false);
  Session.set('menuShow', false);

  var $document = $(document),
  $element = $('.case.view.effect-push'),
  scrolled = 'scrolled',
  reveal = 'reveal';

  $document.scroll(function() {
    if ($document.scrollTop() >= 50) {
      $element.addClass(scrolled);
    } else {
      $element.removeClass(scrolled);
    }
  });

  $document.scroll(function() {
    if ($document.scrollTop() >= 400) {
      $element.addClass(reveal);
    } else {
      $element.removeClass(reveal);
    }
  });
}
