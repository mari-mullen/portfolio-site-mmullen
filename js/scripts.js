console.log("Welcome to My Portfolio!");

$(document).ready(function () {
  $('#hamburger').on('click', function () {
    $('#mainNav').toggleClass('active');
  });

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var target = this.hash;
    $('html, body').animate(
      { scrollTop: $(target).offset().top },
      600
    );
  });
});
