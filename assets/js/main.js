$(document).ready(function () {
    headerFixed();

    // MODAL ****************
    $("[data-modal]").on("click", function () {
        let targetModal = $(`.${$(this).attr("data-modal")}`);
        targetModal.addClass("active");

        ScrollNone();
    });

    $(".modal-close").on("click", function () {
        $(this).closest(".modal").removeClass("active");

        ScrollNone();
    });

    // *************************

    $(".toast-trigger").on("click", function () {
        toastMessage("Toast Message", "default");
    });

    // Switch Active Class
    $(".switcher__item").on("click", function() {
        $(this).closest(".switcher").find(".switcher__item").removeClass("active");
        $(this).addClass("active");
    });

    // accordion
    $(".accordion__content").slideUp(300);
    $(".accordion__toggle").on("click", function (e) {
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
        if (!$(e.target).closest(".lang-switcher, .modal-trigger, .modal__wrapper").length) {
            $(".lang-switcher").removeClass("active");
            $(".modal").removeClass("active");
            
            ScrollNone();
        }

        if($(e.target).closest(".toast-message-close").length) {
            removeToast($(e.target));
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

let _toastCounter = 0;
// Toast function
function toastMessage(message, type = "default") { 
    let toastContainer = `<div class="toast-messages"></div>`;

    let toastBody = `
    <div class="toast-message toast-message_${_toastCounter} ${type}">
        <div class="toast-message-icon">
            <img src="assets/img/icons/success.svg" alt="success">
        </div>
        <span class="helvetica-65">${message}</span>
        <div class="toast-message-close">
            <img src="assets/img/icons/close-white.svg" alt="close">
        </div>
    </div>`;

    if(!$(".toast-messages").length) {
        $("main").append(toastContainer);
    }
    $(".toast-messages").append(toastBody);
    _toastCounter += 1;

    autoRemoveToast(_toastCounter);
}

function autoRemoveToast(index) {
    new Promise(function(resolve, reject) {
        setTimeout(function() {
            $(`.toast-message_${index - 1}`).addClass("toast-message_hidden");
            resolve();
        }, 4000);
    }).then(function() {
        setTimeout(function() {
            $(`.toast-message_${index - 1}`).remove();
            
            if($(".toast-message").length == 0) {
                $(".toast-messages").remove();
            }
        }, 500);
    });
}

function removeToast(closeElement, index) {
    if(!index) {
        let toast = closeElement.closest(".toast-message");

        toast.addClass("toast-message_hidden");
    
        setTimeout(function() {
            toast.remove();
        }, 500);
    } else {
        $(`.toast-message_${index - 1}`).addClass("toast-message_hidden");
    
        setTimeout(function() {
            $(`.toast-message_${index - 1}`).remove();
        }, 500);
    }
}

// =========================>

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
        if ($(".modal").hasClass("active")) {
            $("body").css({ "overflow-y": "hidden", "-webkit-overflow-scrolling": "touch" });
        }
        else {
            $("body").css({ "overflow-y": "scroll", "-webkit-overflow-scrolling": "auto" });
        }
    }
    else {
        if ($(".modal").hasClass("active")) {
            $("body").css({ "overflow-y": "hidden" });
        }
        else {
            $("body").css({ "overflow-y": "auto" });
        }
    }
}

