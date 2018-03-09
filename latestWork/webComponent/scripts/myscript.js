
var counter = 0;
var interval;
$(document).ready(function(){

 
    $( window ).resize(function() {
        if($( window ).width() > 900){
            $("div .topnav2").hide("slow");
        }
      });


    
    $("div a.icon").click(function(){
        // $("div .topnav2").toggleClass("hidethem");
        $("div .topnav2").toggle("slow");
    });
});

