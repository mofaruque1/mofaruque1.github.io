
var x = 0;
$(document).ready(function () {
    $("p.text").click(function () {
      
        $(".without").toggleClass("hero-image");
        if(x==0){
            $(this).html("WITH LINEAR GRADIENTS");
            x=1;
        }
        else{
            $(this).html("WITH OUT LINEAR GRADIENTS");
            x=0;
        }
        
       
    });
});



