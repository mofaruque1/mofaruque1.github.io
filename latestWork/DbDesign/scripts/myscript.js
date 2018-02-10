
var counter = 0;
var interval;
$(document).ready(function(){
 
    $( window ).resize(function() {
        if($( window ).width() > 900){
            $("div .topnav2").hide("slow");
        }
      });


    $("#slideshow .change:gt(0)").hide();
    $("#right-arrow").click(myfunctionNext);
    $("#left-arrow").click(myfunctionPrev);

    setInterval(myfunctionNext,5000);
    
    $("div a.icon").click(function(){
        // $("div .topnav2").toggleClass("hidethem");
        $("div .topnav2").toggle("slow");
    });
});



function myfunctionNext(){
    $(".change:first").fadeOut(5000).next().fadeIn(5000).end().appendTo("#slideshow");
}
function myfunctionPrev(){
    $(".change:last").fadeOut(5000).prev().fadeIn(5000).end().appendTo("#slideshow");
}
