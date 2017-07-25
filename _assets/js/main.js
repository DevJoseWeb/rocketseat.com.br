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

/**
 * Videos RocketWeek
 */
var videoPrefix = 'https://www.youtube.com/embed/';
var videoSufix = '?rel=0&amp;showinfo=0';
var scrollPosition = 0;

// Verifica o hash e dispara um trigger no box do video
$(document).ready(function() {
  if ($('body').hasClass('page-rocketweek-videos')) {
    var hash = window.location.hash;

    var obj = $(hash);
    if (typeof obj.attr('disabled') == 'undefined') {
      obj.trigger('click');
    } else {
      window.location.hash = $('#video-box .box.active').attr('id');
    }
  }
});


// Troca o url do iframe do video pelo data-id e altera o location.hash
function accessVideo(obj) {
  if (!obj.hasClass('box')) {
    obj = obj.closest('.box');
  }

  if (typeof obj.attr('disabled') == 'undefined') {
    $('#video-box iframe').attr('src', videoPrefix + obj.data('id') + videoSufix);

    $('#video-box .box.active').removeClass('active');
    obj.addClass('active');

    scrollPosition = $(document).scrollTop();
    window.location.hash = obj.attr('id');
  }
}

// Dispara um trigger no box do video quando da enter
$('#video-box .box').on('keypress', function(event) {
  event.preventDefault();

  if (event.keyCode == 13 || event.key.toLowerCase() == 'enter') {
    accessVideo($(event.target));
  }
});

// Dispara um trigger no box do video quando clica
$('#video-box .box').on('click', function(event) {
  event.preventDefault();

  accessVideo($(event.target));
});

// Previne o "jump" quando altera o hash
window.onhashchange = function() {
  setTimeout(function() {
    window.scrollTo(0, scrollPosition);
  }, 1);
};
