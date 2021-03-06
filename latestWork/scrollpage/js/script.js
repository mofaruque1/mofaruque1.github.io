window.sr = ScrollReveal();

sr.reveal('.navbar',{
    duration:2000,
    origin:'bottom'
});

sr.reveal('.showcase-left',{
    duration:2000,
    origin:'top',
    distance:'300px'
});

sr.reveal('.showcase-right',{
    duration:2000,
    distance:'300px',
    origin:'right'
});


sr.reveal('.showcase-btn',{
    duration:2000,
    delay:1500,
    origin:'bottom'
});

sr.reveal('#testimonial div', {
    duration: 2000,
    origin:'bottom'
});


sr.reveal('.info-left', {
    duration: 2000,
    distance:'250px',
    origin:'left',
    viewFactor: 0.2
});

sr.reveal('.info-right', {
    duration: 2000,
    distance:'250px',
    origin:'right',
    viewFactor: 0.2
});

sr.reveal('.contact-showcase', {
    duration: 2000,
    distance:'250px',
    delay:1000,
    origin:'left',
    viewFactor: 0.2
});



sr.reveal('.img-responsive', {
    duration: 2000,
    distance:'100px',
    delay:500,
    origin:'right',
    viewFactor: 0.2
});

$(function() {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });