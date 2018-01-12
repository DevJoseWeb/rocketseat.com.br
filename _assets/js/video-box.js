/**
 * GoNative Week - página de vídeos
 */
var videoPrefix = 'https://www.youtube.com/embed/';
var videoSufix = '?rel=0&amp;showinfo=0';
var scrollPosition = 0;

// Desabilita o click em qualquer coisa dentro da box disabilitada
$('.page-startup-canvas-videos .box.disabled, ' +
  '.page-startup-canvas-videos .box.disabled a' +
  '.page-startup-canvas-videos .box.disabled button').on('click', function(event) {
    event.preventDefault();

    return false;
});

// Verifica o hash e dispara um trigger no box do video
$(document).ready(function() {
  if ($('body').hasClass('page-startup-canvas-videos')) {
    // Previne o "jump" quando altera o hash
    window.onhashchange = function() {
      setTimeout(function() {
        $(document).scrollTop(0, scrollPosition);
      }, 1);
    };

    var hash = window.location.hash;
    var obj = $(hash);

    if (!hash) {
      // se a url tiver limpa
      accessVideo($('#video-box .box.active .video-trigger'));
    } else if (typeof obj.attr('disabled') == 'undefined' && !obj.hasClass('disabled')) {
      // se tiver hash na url e o box nao estiver disabled
      accessVideo(obj.find('.video-trigger'));

      // joga o scroll pra cima
      setTimeout(function() {
        $(document).scrollTop(0, scrollPosition);
      }, 1);
    } else {
      // se tiver um hash com disabled
      accessVideo($('#video-box .box').first().find('.video-trigger'));
    }
  }

  // Troca o url do iframe do video pelo data-id e altera o location.hash
  function accessVideo(obj) {
    if (!obj.hasClass('video-trigger')) {
      obj = obj.closest('.video-trigger');
    }

    if (typeof obj.attr('disabled') == 'undefined') {
      $('#video-box iframe').prop('src', videoPrefix + obj.data('id') + videoSufix);

      $('#video-box .box .video-trigger.active').removeClass('active');
      obj.addClass('active');

      scrollPosition = $(document).scrollTop();
      window.location.hash = obj.closest('.box').attr('id');
    }
  }

  // Dispara um trigger no box do video quando da enter
  $('#video-box .box .video-trigger').on('keypress', function(event) {
    event.preventDefault();

    if (event.keyCode == 13 || event.key.toLowerCase() == 'enter') {
      accessVideo($(event.target));
    }
  });

  // Dispara um trigger no box do video quando clica
  $('#video-box .box .video-trigger').on('click', function(event) {
    event.preventDefault();

    accessVideo($(event.target));
  });
});
