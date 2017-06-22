(function($) {
    $(window).load(function() {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");

    });

    // Show/hide menu
    function showHideMenu() {
        $( '.menu-toggle' ).on( 'click', function( e ) {
            e.stopPropagation();
            $( '.site' ).toggleClass( 'toggle-active' );
            $( '.menu-toggle').toggleClass( 'toggle-active' );
            $("#fly-wrap").toggleClass("toggle-active");
            $(".fly-menu-close").toggleClass( 'toggle-active' );
        });
    }
    function closeMenu(){
        $(".menu-toggle").removeClass("toggle-active");
        $("#fly-wrap").removeClass("toggle-active");
        $( '.site' ).removeClass( 'toggle-active' );
        $(".fly-menu-close").removeClass( 'toggle-active' );
    }
    $(window).on( 'load', function() {
        showHideMenu();
    });
    $("#page").click( function(e) {
        closeMenu();
    });
    $(".fly-menu-close").click( function(e) {
        closeMenu();
    });

    // Back To Top With Smooth Scroll
    $(window).scroll(function(){
       if ($(this).scrollTop() < 1000) {
            $('#smoothup') .fadeOut();
        } else {
            $('#smoothup') .fadeIn();
        }
    });
    $('#smoothup').on('click', function(){
        $('html, body').animate({scrollTop:0}, 1000);
        return false;
    });

    // Trigger Unveil Script
    $(document).ready(function() {
        $(".entry-thumbnail img").unveil( 0, function() {
            $(this).css('opacity' , '1');
        });
    });


    // Search Toggle
    $("#search-button").click(function(){
        $("#search-bar").slideToggle();
    });
    
        
})(jQuery);

