window.sr=ScrollReveal(),sr.reveal(".navbar",{duration:2e3,origin:"bottom"}),sr.reveal("#showcase .showcase-left",{duration:2e3,origin:"top",distance:"200px"}),sr.reveal("#showcase .showcase-right",{duration:2e3,distance:"200px",origin:"right"}),sr.reveal(".showcase-btn",{duration:2e3,delay:1e3,origin:"bottom"}),sr.reveal("#testimonial div",{duration:2e3,origin:"bottom"}),sr.reveal(".info-left",{duration:2e3,distance:"250px",origin:"left",viewFactor:.2}),sr.reveal(".info-right",{duration:2e3,distance:"250px",origin:"right",viewFactor:.2}),sr.reveal(".contact-showcase",{duration:1500,distance:"250px",delay:500,origin:"left",viewFactor:.2}),sr.reveal(".img-responsive",{duration:1500,distance:"100px",delay:500,origin:"right",viewFactor:.2}),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if((e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length)return $("html, body").animate({scrollTop:e.offset().top},1e3),!1}})});