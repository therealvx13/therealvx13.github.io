// --------------------------------------------------------- //
// READY
// --------------------------------------------------------- //
$(document).ready(function(){
  $('.showcase').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: true
  });

});

// --------------------------------------------------------- //
// LOADING
// --------------------------------------------------------- //
$( window ).load(function() {

  $('#loader').addClass('removed');
  $('#page').addClass('displayed');

  $(".headline").typed({
    strings: [
      "I’m a digital designer",
      "I'm using photoshop, a lot",
      "I play around with Wordpress",
      "I code CSS, HTML and Javascript",
      "I'm learning AngularJS this year",
      "I create things on the internet",
      "I’m a digital designer"
    ],
    typeSpeed: 50,
    startDelay: 50,
    showCursor: false
  });
  
});


// --------------------------------------------------------- //
// BACK TO TOP
// --------------------------------------------------------- //
$('#backtotop').click(function(){
        
$('html,body').animate({scrollTop: 0},2000);
return false;

});
