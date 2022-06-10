$(document).ready(function () {
    headerFixed();

    // MODAL ***************************
    $("[data-modal]").on("click", function () {
        let targetModal = $(`.${$(this).attr("data-modal")}`);
        targetModal.addClass("active");

        ScrollNone();
    });

    $(".modal-close").on("click", function () {
        $(this).closest(".modal").removeClass("active");

        ScrollNone();
    });

    // TOAST ****************************
    $(".toast-trigger").on("click", function () {
        toastMessage("Toast Message", "default");
    });

    // SWITCHER *************************
    $(".switcher__item").on("click", function() {
        if(!$(this).closest(".switcher").hasClass("switcher_multiple")) {
            $(this).closest(".switcher").find(".switcher__item").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).toggleClass("active");
        }
    });

    // ACCORDION ************************
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

    // FORM ITEMS *********************
    $(".form-field input").on("keyup", function() {
        let val = $(this).val().trim();
        
        if(val.length) {
            $(this).closest(".form-field").addClass("filled");
        } else {
            $(this).closest(".form-field").removeClass("filled");
        }
    });

    $(".form-field input").on("focus", function() {
        $(this).closest(".form-field").addClass("focused");
    });
    $(".form-field input").on("focusout", function() {
        $(this).closest(".form-field").removeClass("focused");
    });

    // Form Validation
    $(".with-validation").on("submit", function(e) {
        let isValid = true;
        let email = $(this).find(".email-validation").length && $(this).find(".email-validation").val();
        let errorHtml = `<div class="form-field__message error">Wrong email, please set correct email address</div>`;

        $(this).find(".form-field__message.error").remove();

        if(!isEmailValid(email)) {
            $(".email-validation").closest(".form-field").append(errorHtml);
            isValid = false;
        }

        if(!isValid) {
            e.preventDefault();
        }
    }); 

    // REMOVE ACTIVE CLASSES *******************************
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
