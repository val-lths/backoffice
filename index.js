document.addEventListener('DOMContentLoaded', function () {
  var ulLinks = document.querySelectorAll('ul li a');
  var divBoxes = document.querySelectorAll('div.box');

  ulLinks.forEach(function (link, index) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      hideAllDivBoxes();
      divBoxes[index].style.display = 'flex';
    });
  });

  function hideAllDivBoxes() {
    divBoxes.forEach(function (div) {
      div.style.display = 'none';
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var ulLinks = document.querySelectorAll('ul li a');
  var inputFields = document.querySelectorAll('input');

  inputFields.forEach(function (input) {
    input.addEventListener('focus', function () {
      ulLinks.forEach(function (link) {
        if (link.classList.contains('active')) {
          link.style.color = 'black';
        } else {
          link.style.color = '';
        }
      });
    });

    input.addEventListener('blur', function () {
      ulLinks.forEach(function (link) {
        link.style.color = '';
      });
    });
  });

  ulLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      ulLinks.forEach(function (otherLink) {
        if (otherLink !== link) {
          otherLink.classList.remove('active');
        }
      });
      link.classList.add('active');
    });
  });
});