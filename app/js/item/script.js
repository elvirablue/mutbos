//*****************
$(document).ready(function() {
  $('input[name^=\'user-phone\']').mask('+7 (999) 999 - 9999');

  $(window).scroll(function() {
    if ($(window).scrollTop() >= 500) {
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('fixed-top');
      //$(".navbar-nav .nav-link.active").removeClass('active');
      //$(".navbar-nav .nav-link:first-child").addClass('active');
    }
  });

  $('#navbarMain').on('show.bs.collapse', function() {
    document.body.style.overflow = 'hidden';
  }).on('hide.bs.collapse', function() {
    document.body.style.overflow = 'visible';
  });

  $('.navbar-nav .nav-link').click(function(ev) {
    ev.preventDefault();
    var target = $($(this).attr('href'));
    $('html, body').animate({scrollTop: target.offset().top - 100}, 600);
    document.body.style.overflow = 'visible';
    $('#navbarMain').collapse('hide');
    $('.navbar-nav .nav-link.active').removeClass('active');
    $(this).addClass('active');
    //if ($(window).width() < 992 )  $('.menu .nav-main').hide();
  });

// при открытии модального окна
  $('#Modal').on('show.bs.modal', function(event) {
    // получить кнопку, которая его открыло
    var button = $(event.relatedTarget);
    var buttonModal = $(this).find('.button');
    // извлечь информацию из атрибутов
    var title = button.data('title');
    var namebtn = button.data('namebtn');
    var checkbox = $(this).find('input:checkbox');
    //var mail = button.data('mail');
    //if (mail == true) $(this).find('.mail').removeClass('hidden')
    //else $(this).find('.mail').addClass('hidden');
    //вывести эту информацию в элемент, имеющий id="content"
    $(this).find('h2.title').text(title);
    buttonModal.text(namebtn);
    checkbox.change(function() {
      if (checkbox.is(':checked')) {
        buttonModal.prop('disabled', false);
      } else buttonModal.prop('disabled', true);
    });

  });

  var owl1 = $('#owl-1');

  owl1.owlCarousel({
    loop: true,//Зацикливаем слайдер
    margin: 0,
    nav: false,
    dots: true,
    smartSpeed: 1300, //Время движения слайда
    autoplayTimeout: 80, //Время смены слайда
    responsiveClass: true,
    dotsEach: true,
    navigation: false,
    items: 1
  });

  var owl2 = $('#owl-2');

  owl2.owlCarousel({
    loop: true,//Зацикливаем слайдер
    margin: 0,
    nav: false,
    dots: true,
    smartSpeed: 1300, //Время движения слайда
    autoplayTimeout: 80, //Время смены слайда
    responsiveClass: true,
    dotsEach: true,
    navigation: false,
    items: 1
  });
});

//*****************



