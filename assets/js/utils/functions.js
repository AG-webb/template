function isEmailValid(email) {
    var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
}

function dinamicAppend() {
    if ($(window).width() < 1280) {
        !$(".about-heading__title").children(".about-heading__gallery").length && $(".about-heading__gallery").appendTo(".about-heading__title");
    } else {
        !$(".about-heading__col").children(".about-heading__gallery").length && $(".about-heading__gallery").appendTo(".about-heading__col");
    }
}

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

function tabsInit() {
    $(".tab").on("click", function() {
        let contentId = $(this).attr("data-tab");

        $(this).closest(".tabs__control").find(".tab").removeClass("active");
        $(this).addClass("active");

        $(this).closest(".tabs").find(".tab-content").removeClass("active");
        $("#" + contentId).addClass("active");
    });
}

let _toastCounter = 0;
function toastMessage(message, type = "default") { 
    let toastContainer = `<div class="toast-messages"></div>`;

    let toastBody = `
    <div class="toast-message toast-message_${_toastCounter} ${type}">
        <div class="toast-message-icon">
            <img src="assets/img/icons/success.svg" alt="success">
        </div>
        <span class="helvetica-65">${message}</span>
        <div class="toast-message__close toast-close">
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

function headerFixed() {
    let st = $(this).scrollTop();

    if (st <= 5) {
        $(".header__wrapper").removeClass("fixed");
    } else {
        $(".header__wrapper").addClass("fixed");
    }
}

function ScrollNone() {
    if ($(".modal").hasClass("active")) {
        $("body").addClass("locked");
    } else {
        $("body").removeClass("locked");
    }
}