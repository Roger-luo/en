(function($) { 
    // When to show the scroll link
    // higher number = scroll link appears further down the page   
    var upperLimit = 1000;
    var downLimit = 400;
    var doc = document;
    var win = window;

    // Our scroll link element
    var scrollElem = $('#totop');
   
    // Scroll to top speed
    var scrollSpeed = 500;
   
    // Show and hide the scroll to top link based on scroll position   
    scrollElem.hide();
    $(window).scroll(function () {            
        var scrollTop = $(document).scrollTop();
        var scrollBot = $(document).height()-$(window).height()-scrollTop;       
        if ( scrollBot < downLimit ) {
            $(scrollElem).stop().fadeTo(300, 0);
            console.log('bot');
            console.log(scrollBot); // fade back in           
        }else if (scrollTop > upperLimit){
            $(scrollElem).stop().fadeTo(300, 1);
        }else{       
            $(scrollElem).stop().fadeTo(300, 0); // fade out
        }
    });

    // Scroll to top animation on click
    $(scrollElem).click(function(){
        $('html, body').animate({scrollTop:0}, scrollSpeed); return false;
    });
})(jQuery);

(function($) { 

    // Our scroll link element
    var scrollElem = $('#totop_bottom');
   
    // Scroll to top speed
    var scrollSpeed = 500;

    // Scroll to top animation on click
    $(scrollElem).click(function(){
        $('html, body').animate({scrollTop:0}, scrollSpeed); return false;
    });
})(jQuery);

