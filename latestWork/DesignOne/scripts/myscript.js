



jQuery(document).ready(function () {
    jQuery(".header1_img").animate({ opacity: 0.8 }, 4000);

    var x1 = jQuery(".triangle");
    var x2 = jQuery(".topnav2");
    jQuery("#myTopnav .icon").click(function(){
        x1.toggleClass("hidethem");
        x2.toggleClass("hidethem");
    });
});

