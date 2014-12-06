Template.case.rendered = function () {
  $('.topbar').hide();

  Session.set('menuActive', false);
  Session.set('menuShow', false);

  var $document = $(document),
  $element = $('.case.view.effect-push'),
  scrolled = 'scrolled',
  reveal = 'reveal';

  $document.scroll(function() {
    if ($document.scrollTop() >= 10) {
      $element.addClass(scrolled);
    } else {
      $element.removeClass(scrolled);
    }
  });
}
