$(document).ready(function() {
    
    var width = $(window).width();
    if (width < 550) {
        //change image in main article:
        $(".web3desktop img").attr("src","./assets/images/image-web-3-mobile.jpg");
        //menu on mobile:

        $(".topRightNav ul").removeClass("desktopMenu");

        $(".cross").hide();
        $(".mobileMenu").hide();

        $(".hamburger").click(function() {
           
            $(".mobileMenu").slideToggle("slow", function() {  
                $(".hamburger").hide();
                $(".cross").show();
            });
        });

        $(".cross").click(function() {
            $(".mobileMenu").slideToggle("slow", function() {
                $(".cross").hide();
                $(".hamburger").show();
            });
        });

    } else {
        $(".topRightNav").css("display", "block");
        $(".topRightNav ul").removeClass("mobileMenu");
        $("#menuIcon").css("display", "none");
        $(".hamburger").hide();
        $(".cross").hide();
    }    
});
