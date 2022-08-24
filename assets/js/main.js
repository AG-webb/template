$(document).ready(function () {
    headerFixed();
    tabsInit();
    dinamicAppendInit();

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
    $(".switcher__item").on("click", function () {
        if (!$(this).closest(".switcher").hasClass("switcher_multiple")) {
            $(this).closest(".switcher").find(".switcher__item").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).toggleClass("active");
        }
    });

    // ACCORDION ************************
    $(".accordion__header").on("click", function (e) {
        let accordion = $(this).closest(".accordion");
        let thisItem = $(this).closest(".accordion__item");
        let openItem = accordion.find(".accordion__item.open");
        let thisBody = thisItem.find(".accordion__body");
        let openBody = openItem.find(".accordion__body");

        if (thisItem.hasClass("open")) {
            thisItem.removeClass("open");
            thisBody.slideUp(300);
        } else {
            openItem.removeClass("open");
            openBody.slideUp(300);
            thisItem.addClass("open");
            thisBody.slideDown(300);
        }
    });

    // FORM ITEMS *********************
    $(".form-field__input").on("keyup", function () {
        let val = $(this).val().trim();

        if (val.length) {
            $(this).closest(".form-field").addClass("filled");
        } else {
            $(this).closest(".form-field").removeClass("filled");
        }
    });

    $(".form-field__input").on("focus", function () {
        $(this).closest(".form-field").addClass("focused");
    });
    $(".form-field__input").on("focusout", function () {
        $(this).closest(".form-field").removeClass("focused");
    });

    $("select").on("change", function() {
        console.log($(this).val());
    });

    // Form Validation ***************************
    $(".with-validation").on("submit", function (e) {
        let isValid = true;
        let email = $(this).find(".email-validation");
        let errorHtml = `<div class="form-field__message error">Wrong email, please set correct email address</div>`;

        $(this).find(".form-field__message.error").remove();
        $(this).find(".form-field.invalid").removeClass("invalid");

        if (email.length) {
            if (!isEmailValid(email.val())) {
                $(".email-validation").closest(".form-field").addClass("invalid").append(errorHtml);
                isValid = false;
            }
        }

        if (!isValid) {
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

        if ($(e.target).closest(".toast-close").length) {
            removeToast($(e.target));
        }

        e.stopPropagation();
    });
});

// Scroll
$(window).scroll(function () {
    headerFixed();
});
