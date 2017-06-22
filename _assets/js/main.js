//= require jquery

/**
 * Dropdown
 */
$('.dropdown').on('click', function(event) {
  var target = $(event.target);

    target = (target.hasClass('dropdown')) ? target : target.closest('.dropdown');

    if (target.hasClass('opened')) {
      target.removeClass('opened');
    } else {
      target.addClass('opened');
    }
});

/**
 * Call to action
 */
var trigger = $('.call-action');
var input  = $('input[name="data[name]"]');
input = input.length ? input : $('input[name="data[email]"]');

if (typeof trigger != 'undefined' && trigger.length && typeof input != 'undefined' && input.length) {
  trigger.on('click', function(event) {

    if ($(event.target).attr('href') == '#') {
      event.preventDefault();
      var delay = 500;

      setTimeout(function() {
        input.focus();
      }, delay);

      $('html,body').animate({
        scrollTop: input.offset().top
      }, delay);
    }
  });
}
