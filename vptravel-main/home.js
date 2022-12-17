jQuery(function($){
    var $navbar = $('.nav_bar');
    var $gotop = $('.gotop');
    var $belowct = $('.below_content');
    $gotop.hide();
    $(window).scroll(function(event){
        var $current = $(this).scrollTop();
        if ($current == 0){
            $navbar.removeClass('navbar-color1');
            $navbar.removeClass('navbar-color2');
            $navbar.removeClass('navbar-color3');
            $gotop.hide();
            $belowct.removeClass('movedown');
        } else{
            if ($current > 150 && $current < 500){
                $navbar.removeClass('navbar-color2');
                $navbar.removeClass('navbar-color3');
                $navbar.addClass('navbar-color1');
                $gotop.show();
                // $belowct.removeClass('movedown');
            } else {
                if ($current > 500 && $current < 1000){
                    $navbar.removeClass('navbar-color1');
                    $navbar.removeClass('navbar-color3');
                    $navbar.addClass('navbar-color2');
                    // $belowct.removeClass('movedown');
                } else {
                    if ($current > 1000){
                        $navbar.removeClass('navbar-color1');
                        $navbar.removeClass('navbar-color2');
                        $navbar.addClass('navbar-color3');
                        // $belowct.addClass('movedown');
                    }
                }
            }
        }
    });

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 3000); 
    }
});