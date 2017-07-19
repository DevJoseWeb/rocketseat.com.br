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

/**
 * Custom radio
 */
$('.custom-radio').on('click', function(event) {
  event.preventDefault();

  var obj = $(event.target);
  var parent = obj.closest('ul');

  if (parent == 'undefined') {
    return;
  }

  var rel = parent.attr('rel');

  if (!rel) {
    return;
  }

  var hidden = $('input[rel="' + rel + '"]');

  if (typeof hidden == 'undefined' || !hidden.length) {
    return;
  }

  hidden.val(obj.parent().text());

  parent.find('.custom-radio.active').removeClass('active');
  obj.addClass('active');
});

/**
 * Trigger list
 */
$('.trigger-list').on('click', 'li', function(event) {
  $(event.target).find('.custom-radio').trigger('click');
});

$('*[data-query]').each(function() {
  var query = $(this).data('query');
  var url = new URL(window.location.href);
  url = url.searchParams.get(query);

  $(this).val(url);

  var redirect = $('[name="data[redirect_url]"]');

  if (typeof redirect !== 'undefined') {
    redirect.val(redirect.val() + '?' + query + '=' + url);
  }
});
