$('.dropdown').on('click', function(event) {
  var target = $(event.target);

    target = (target.hasClass('dropdown')) ? target : target.closest('.dropdown');

    if (target.hasClass('opened')) {
      target.removeClass('opened');
    } else {
      target.addClass('opened');
    }
});

var trigger = $('.action');
var input  = $('input[name="data[name]"]');
input = input.length ? input : $('input[name="data[email]"]');

if (typeof trigger != 'undefined' && trigger.length && typeof input != 'undefined' && input.length) {
  trigger.on('click', function(event) {
    event.preventDefault();

    input.focus();

    $('html,body').animate({
      scrollTop: input.offset().top
    }, 'slow');
  });
}
