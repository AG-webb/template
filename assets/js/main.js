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

    $("select").on("change", function () {
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

    $(".input-number").on("keyup", function(e) {
        let val = $(this).val();
        let onlyNum = getOnlyNumbers(val);

        if (onlyNum) {
            $(this).val(onlyNum)
        } else {
            $(this).val("");
        }

        // Separator
        if($(this).attr("data-input-separator") !== undefined) {
            let separator = $(this).attr("data-input-separator");
            let valWithSeparator = numberWithSeparator($(this).val(), separator);

            $(this).val(valWithSeparator);
        }

        // Phone Formatter
        if($(this).hasClass("formatted-phone")) {
            let formattedPhoneNumber = formatPhoneNumber($(this).val());
            
            if(formattedPhoneNumber) {
                $(this).val(formattedPhoneNumber);
            }
        }
    });

    // FIle Upload *******************************
    let uploadedFiles = [];
    $(".file-upload-input").on("change", function () {
        const input = this;
        let files = this.files;
        const mainBlock = $(input).closest(".file-upload");
        const previewBlock = mainBlock.find(".file-upload-preview");

        uploadedFiles = [];

        if(previewBlock.length) {
            previewBlock.html("");
        }

        if (files.length) {
            if(mainBlock.hasClass("avatar-upload")) {
                let { name, size, type } = files[0];
                uploadedFiles = [...uploadedFiles, files[0]];
                let reader = new FileReader();

                reader.onload = function () {
                    let img = document.createElement('img');
                    img.src = reader.result;
    
                    mainBlock.addClass("preview-mode")
                    mainBlock.find(".avatar-upload__body img").remove();
                    mainBlock.find(".avatar-upload__body").prepend(img);
                }
                reader.readAsDataURL(files[0]);

                console.log("UPLOADED DOCUMENTS LIST ----------- ", uploadedFiles);
            }

            if(mainBlock.hasClass("doc-upload")) {
                for(let i = 0; i < files.length; i++) {
                    let { name, size, type } = files[i];
                    // add item to list
                    uploadedFiles = [...uploadedFiles, files[i]];

                    let previewItemHtml = `
                        <div class="file-upload-item doc-upload-item">
                            <span class="file-upload-item__name doc-upload-item__name">${name}</span>
                            <div class="file-upload-item__remove doc-upload-item__remove">x</div>
                        </div>
                    `
                    previewBlock.append(previewItemHtml);
                }

                console.log("UPLOADED DOCUMENTS LIST ----------- ", uploadedFiles);
            }
        }
    });

    $(".file-upload").on("click", ".file-upload-item__remove", function() {
        let itemBlock = $(this).closest(".file-upload-item");
        let itemName = itemBlock.find(".file-upload-item__name").text();

        if(uploadedFiles.length) {
            // remove item from list
            uploadedFiles = [...uploadedFiles.filter(file => {
                return file.name !== itemName
            })];

            console.log("UPLOADED DOCUMENTS LIST ----------- ", uploadedFiles);
        }

        itemBlock.remove();
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
