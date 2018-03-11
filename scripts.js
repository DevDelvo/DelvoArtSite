$(document).ready(function() {
  var number = 0;
  $('#next').click(function () { //next button.
    $(".slide" + number).slideUp();
    $(".tab" + number).removeClass('current');
    $(".slide" + (number + 1)).slideDown();
    $(".tab" + (number +1)).addClass('current');

    if (number === 4) {
      $("#next").css('transform', 'rotate(180deg)');
    }

    if (number === 5) {
      $(".slide5").slideUp();
      $(".tab5").removeClass("current");
      $('.slide0').slideDown();
      $('.tab0').addClass('current');
      $('#next').css('transform', 'rotate(0deg)');

      number = -1;
    }
    number += 1;
  });

  $(".tab0").click(function() {
    $(".slide" + number).slideUp();
    $(".tab" + number).removeClass('current');
    $(".tab0").addClass('current');
    $('.slide0').slideDown();

    number = 0;

    $('#next').css('transform', 'rotate(0deg)');
  });

  $(".tab1").click(function() {
    $(".slide" + number).slideUp();
    $(".tab" + number).removeClass('current');
    $(".tab1").addClass('current');
    $(".slide1").slideDown();

    number = 1;

    $('#next').css('transform', 'rotate(0deg)');
  });

  $('.tab2').click(function() {
    $('.slide' + number).slideUp();
    $('.tab' + number).removeClass('current');
    $('.tab2').addClass('current');
    $('.slide2').slideDown();

    number = 2;

    $('#next').css('transform', 'rotate(0deg)');
  });

  $('.tab3').click(function() {
    $('.slide' + number).slideUp();
    $('.tab' + number).removeClass('current');
    $('.tab3').addClass('current');
    $('.slide3').slideDown();
    number = 3;
    $('#next').css('transform', 'rotate(0deg)');
  });

  $('.tab4').click(function() {
    $('.slide' + number).slideUp();
    $('.tab4' + number).removeClass('current');
    $('.tab4').addClass('current');
    $('.slide4').slideDown();

    number = 4;

    $('#next').css('transform', 'rotate(0deg)');
  });

  $(".tab5").click(function() {
    $('.slide' + number).slideUp();
    $('.tab' + number).removeClass('current');
    $('.tab5').addClass('current');
    $('.slide5').slideDown();

    number = 5;

    $('#next').css('transform', 'rotate(180deg)');
  });
});
