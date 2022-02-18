$(document).ready(function () {
    headerFixed();

    // all popups show func
    $(".popup-target").click(function () {
        let targetPopup = $(`.${$(this).attr("data-popup")}`);
        targetPopup.addClass("active");

        ScrollNone();
    });

    $(".popup-close").click(function () {
        $(this).closest(".popup").removeClass("active");

        ScrollNone();
    });

    // accordion
    $(".accordion__content").slideUp(300);
    $(".accordion__toggle").click(function (e) {
        if (!$(this).hasClass("active")) {
            $(".accordion__toggle").removeClass("active");
            $(".accordion__wrap").removeClass("open");
        }

        $(".accordion__content").slideUp(300);
        $(this).toggleClass("active");
        $(this).closest(".accordion__wrap").toggleClass("open");

        if ($(this).closest(".accordion__wrap").hasClass("open")) {
            $(this).next(".accordion__content").slideDown(300);
        }
    });


    // remove all active classes
    $(document).on('click', function (e) {
        if (!$(e.target).closest(".lang-switcher").length) {
            $(".lang-switcher").removeClass("active");

            ScrollNone();
        }

        e.stopPropagation();
    });
});

// Scroll
$(window).scroll(function () {
    headerFixed();
});



// functions
function dinamicAppend() {
    if ($(window).width() < 1280) {
        $(".about-heading__gallery").insertAfter(".about-heading__title");
    } else {
        $(".about-heading__gallery").appendTo(".about-heading__col");
    }
}

// Sticky Function 
function makeSticky(selector) {
    let element = $(selector);
    let elementOffsetTop = element.offset().top;
    let scrollTop = $(document).scrollTop();

    $(document).bind('ready scroll', function () {
        scrollTop = $(document).scrollTop();

        if (scrollTop >= elementOffsetTop) {
            element.addClass("sticky-element");
        } else {
            element.removeClass("sticky-element");
        }
    });
}

function headerFixed() {
    let st = $(this).scrollTop();

    if (st <= 5) {
        $(".header__wrapper").removeClass("fixed");
    } else {
        $(".header__wrapper").addClass("fixed");
    }
}


function ScrollNone() {
    if ($(window).width() <= 768) {
        if ($(".popup, .filter-popup").hasClass("active")) {
            $("body").css({ "overflow-y": "hidden", "-webkit-overflow-scrolling": "touch" });
        }
        else {
            $("body").css({ "overflow-y": "scroll", "-webkit-overflow-scrolling": "auto" });
        }
    }
    else {
        if ($(".popup, .filter-popup").hasClass("active")) {
            $("body").css({ "overflow-y": "hidden" });
        }
        else {
            $("body").css({ "overflow-y": "auto" });
        }
    }
}

