$(function() {

    // ===========================
    // Nav Overlay
    // ===========================

    // FIXME ccm: Sometimes the script will not fire when navigating between the footer about link and the header contact us link.

    var $navOverlay = $(".nav-overlay");

    $(".nav-button").on("click", function() {
        $navOverlay.fadeIn(300)
        // $navOverlay.fadeIn(300, function() {
        //     $(window).scrollTop($(window).scrollTop() + 1)
        // })
    }), $(".nav-x").on("click", function() {
        $navOverlay.fadeOut()
    }), $(document).keyup(function(e) {
        // https://api.jquery.com/keyup/
        // https://css-tricks.com/snippets/javascript/javascript-keycodes/
        // e.keyCode && $navOverlay.fadeOut()
        e.which && $navOverlay.fadeOut()
    });


    // ===========================
    // Sticky
    // ===========================

    // $(".nav-button").stick_in_parent({
    //     parent: ".sticky",
    //     offset_top: "13px"
    // });


    // ===========================
    // Typed.js
    // ===========================

    $("#typed").typed({
        // strings       : ["learn how to code.", "are entrepreneurs.", "want to become full-stack web developers.", "advance in their career.", "start a new career.", "launch their own ideas.", "upgrade their skills."],
        stringsElement: $('#typed-strings'),
        typeSpeed     : 60,
        backSpeed     : 30,
        startDelay    : 1500,
        backDelay     : 1000,
        loop          : false,
        contentType   : 'html',
        loopCount     : false,
        preStringTyped: function() {
            $('#typed-strings').css('display', 'inline-block');
        }
    });


    // ===========================
    // bxSlider
    // ===========================


    // $('.bxslider').bxSlider({
    //     auto: false,
    //     speed: 800,
    //     pause: 5000,
    //     pager: false,
    //     controls: false
    // });

    $('.hero-slider ul').bxSlider({
        auto: true,
        speed: 1000,
        pause: 7000,
        pager: false,
        controls: false,
        onSliderLoad: function(){
            $('.hero-slider ul li h1').css('display', 'block');
        }
    });


    // ===========================
    // Smooth Scroll
    // ===========================


    $('.hero a').smoothScroll({
        speed: 800
    });


    // ===========================
    // Form Validation
    // ===========================

    // http://webdesign.tutsplus.com/tutorials/how-to-make-floating-input-labels-with-html5-validation--cms-26120

    // $('input:empty, textarea:empty').addClass('empty');

    // $('input').keyup(function () {
    //   if ($(this).val().trim() !== '') {
    //     $(this).removeClass('empty');
    //   } else {
    //     $(this).addClass('empty');
    //   }
    // });

    // $('.validations input:empty, .validations textarea:empty').closest('li').addClass('empty');

    // $('.validations input, .validations textarea').keyup(function () {
    //   if ($(this).val().trim() !== '') {
    //     $(this).closest('li').removeClass('empty');
    //   } else {
    //     $(this).closest('li').addClass('empty');
    //   }
    // });


    // ===========================
    // JQuery lightGallery
    // ===========================

    $(".lightgallery-1, .lightgallery-2, .lightgallery-3").lightGallery();

});

transformicons.add('.tcon')
