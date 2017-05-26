var dropdowns = document.getElementsByClassName('dropdown');

for (var i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener('click', function(event) {
    var target = event.target;

    target = (target.classList.contains('dropdown')) ? target : target.parentElement;

    if (target.classList.contains('opened')) {
      target.classList.remove('opened');
    } else {
      target.classList.add('opened');
    }
  });
}
