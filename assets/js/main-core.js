document.addEventListener("DOMContentLoaded", function () {
    headerFixed();
    tabsInit();
    accordionInit();
    dynamicAppendInit();

    // MODAL ***************************
    const dataModalElements = document.querySelectorAll("[data-modal]");
    if (dataModalElements.length) {
        dataModalElements.forEach((dataModal) => {
            dataModal.addEventListener("click", function () {
                let targetModal = document.querySelector(`.${dataModal.getAttribute("data-modal")}`);
                if(targetModal) {
                    targetModal.classList.add("active");

                    scrollNone();
                }

            });
        });
    }

    const modalCloseElements = document.querySelectorAll(".modal-close");
    if (modalCloseElements.length) {
        modalCloseElements.forEach((modalClose) => {
            modalClose.addEventListener("click", function () {
                modalClose.closest(".modal").classList.remove("active");

                scrollNone();
            });
        });
    }

    // TOAST ****************************
    const toastTriggerElements = document.querySelectorAll(".toast-trigger");
    if(toastTriggerElements.length) {
        toastTriggerElements.forEach((toastTriggerElement) => {
            toastTriggerElement.addEventListener("click", function () {
                toastMessage("Toast Message", "default");
            });
        });
    }

    // DATEPICKER ************************
    const singleDatePickerElements = document.querySelectorAll('.single-datepicker');
    if(singleDatePickerElements.length) {
        singleDatePickerElements.forEach((singleDatePickerElement) => {
            const singleDatepickerInput = singleDatePickerElement.querySelector("input");

            const rangeDatepicker = new AirDatepicker(singleDatepickerInput, {
                dateFormat: "dd/MM/yyyy",
                // isMobile: true,
                classes: "custom-datepicker-dropdown",
                // inline: true,
                autoClose: true,
                nextHtml: "<i class='icon icon-arrow-right'></i>",
                prevHtml: "<i class='icon icon-arrow-left'></i>",
                onSelect: ({date, formattedDate, datepicker}) => {
                    console.log(formattedDate);
                },
                onRenderCell: ({date, cellType, datepicker}) => {
                    if (cellType === 'day') {
                        if(date.getDate() === 4) {
                            return {
                                disabled: true,
                            }
                        }
                        if (date.getDate() === 12) {
                            const html = `<span>${date.getDate()}</span><span class="event-show"></span>`;
                            const attrs = '';

                            return {
                                html,
                                classes: 'custom-datepicker__event',
                            }
                        }
                    }
                },
            });

            singleDatepickerInput.addEventListener("input", function() {
                let formattedDateInput = formatDateInput(singleDatepickerInput.value);
                
                singleDatepickerInput.value = formattedDateInput;
            });
        });
    }

    const rangeDatePickerElements = document.querySelectorAll('.range-datepicker');
    if(rangeDatePickerElements.length) {
        rangeDatePickerElements.forEach((rangeDatePickerElement) => {
            const rangeDatepickerInput = rangeDatePickerElement.querySelector("input");

            const rangeDatepicker = new AirDatepicker(rangeDatepickerInput, {
                range: true,
                autoClose: true,
                // inline: true,
                classes: "custom-datepicker-dropdown",
                nextHtml: "<i class='icon icon-arrow-right'></i>",
                prevHtml: "<i class='icon icon-arrow-left'></i>",
                dateFormat: "dd/MM/yyyy",
                multipleDatesSeparator: ' − ',
                onSelect: ({date, formattedDate, datepicker}) => {
                    console.log(formattedDate);
                }
            });
        });
    }

    // SWITCHER *************************
    const switcherItemElements = document.querySelectorAll(".switcher__item");
    if(switcherItemElements.length) {
        switcherItemElements.forEach((switcherItemElement) => {
            switcherItemElement.addEventListener("click", function () {
                if (!switcherItemElement.closest(".switcher").classList.contains("switcher_multiple")) {
                    switcherItemElement.closest(".switcher").querySelector(".switcher__item.active").classList.remove("active");
                    switcherItemElement.classList.add("active");
                } else {
                    switcherItemElement.classList.toggle("active");
                }
            });
        });
    }

    // TOGGLER *************************
    const togglerTriggerElements = document.querySelectorAll(".toggler-trigger");
    if (togglerTriggerElements.length) {
        togglerTriggerElements.forEach((togglerTriggerElement) => {
            togglerTriggerElement.addEventListener("click", function (e) {
                const toggler = togglerTriggerElement.closest(".toggler");
                toggler.classList.toggle("active");

                if(togglerTriggerElement.closest(".form-field_password")) {
                    const formField = togglerTriggerElement.closest(".form-field_password");
                    const formFieldInput = formField.querySelector(".form-field__input");

                    if(formField.classList.contains("active")) {
                        formFieldInput.setAttribute("type", "text");
                    } else {
                        formFieldInput.setAttribute("type", "password");
                    }
                }

                scrollNone();
            });
        });
    }

    const togglerCloseElements = document.querySelectorAll(".toggler-close");
    if (togglerCloseElements.length) {
        togglerCloseElements.forEach((togglerClose) => {
            togglerClose.addEventListener("click", function () {
                togglerClose.closest(".toggler").classList.remove("active");

                scrollNone();
            });
        });
    }

    // POPOVER **************************
    const popoverElements = document.querySelectorAll(".popover");
    const popoverTriggerElements = document.querySelectorAll(".popover-trigger");

    if (popoverElements.length) {
        if (window.innerWidth <= 1024) {
            popoverElements.forEach((popover) => {
                popoverSlideInit(popover);
            });
        }
    }

    if(popoverTriggerElements.length) {
        popoverTriggerElements.forEach((popoverTrigger) => {
            popoverTrigger.addEventListener("click", function () {
                if (popoverTrigger.closest(".popover-container").classList.contains("active")) {
                    popoverTrigger.closest(".popover-container").classList.remove("active");
                } else {
                    const popoverActiveContainers = document.querySelectorAll(".popover-container");
                    if(popoverActiveContainers.length) {
                        popoverActiveContainers.forEach((popoverActiveContainer) => {
                            popoverActiveContainer.classList.remove("active");
                        });
                    }
                    
                    popoverTrigger.closest(".popover-container").classList.add("active");
                }
        
                if (window.innerWidth < 1024) {
                    scrollNone();
                }
            });
        });
    }

    // Sliders
    const mainSliderElement = document.querySelector(".main-slider");
    if (mainSliderElement) {
        const mainSplideWrapper = mainSliderElement.querySelector(".splide");
        const mainSlider = new Splide(mainSplideWrapper, {
            direction: 'ttb',
            perPage: 5,
            perMove: 1,
            type: 'loop',
            height: '24.6875rem',
            arrowPath: 'M12.5858 7.58579C13.3668 6.80474 14.6332 6.80474 15.4142 7.58579L26.9142 19.0858C27.6953 19.8668 27.6953 21.1332 26.9142 21.9142L15.4142 33.4142C14.6332 34.1953 13.3668 34.1953 12.5858 33.4142C11.8047 32.6332 11.8047 31.3668 12.5858 30.5858L22.6716 20.5L12.5858 10.4142C11.8047 9.63317 11.8047 8.36684 12.5858 7.58579Z',
            breakpoints: {
                1024: {
                    height: '21.875rem',
                },
            }
        });
        mainSlider.mount();
    }

    // FORM ITEMS *********************
    const formFieldInputElements = document.querySelectorAll(".form-field__input");
    if(formFieldInputElements.length) {
        formFieldInputElements.forEach((formFieldInputElement) => {
            formFieldInputElement.addEventListener("keyup", function () {
                let val = formFieldInputElement.value.trim();
        
                if (val.length) {
                    formFieldInputElement.closest(".form-field").classList.add("filled");
                } else {
                    formFieldInputElement.closest(".form-field").classList.remove("filled");
                }
            });
        
            formFieldInputElement.addEventListener("focus", function () {
                formFieldInputElement.closest(".form-field").classList.add("focused");
            });
            formFieldInputElement.addEventListener("focusout", function () {
                formFieldInputElement.closest(".form-field").classList.remove("focused");
            });
        });
    }

    const selectElements = document.querySelectorAll("select");
    if(selectElements.length) {
        selectElements.forEach((selectElement) => {
            selectElement.addEventListener("change", function () {
                if(selectElement.getAttribute("multiple") !== null) {
                    console.log(getMultipleSelectValues(selectElement));
                } else {
                    console.log(selectElement.value);
                }
            });
        });
    }

    const appendSelectElement = document.querySelector(".append-select");
    if(appendSelectElement) {
        appendSelectElement.addEventListener("click", function() {
            if(!appendSelectElement.parentElement.querySelector(".custom-select")) {
                appendSelectElement.parentElement.insertAdjacentHTML('beforeend',
                    `<div class="custom-select dynamic-select">
                        <div class="combo-box multiple searchable" data-combo-name="dynamicSelect[]">
                            <div class="combo-box-selected">
                                <div class="combo-box-selected-wrap">
                                    <span class="combo-box-placeholder">Dynamic appended Select Placeholder</span>
                                </div>
                            </div>
                            <div class="combo-box-dropdown">
                                <div class="combo-box-options">
                                    <div class="combo-option selected" data-option-value="1">Option 1</div>
                                    <div class="combo-option" data-option-value="2">Option 2</div>
                                    <div class="combo-option" data-option-value="3">Option 3</div>
                                    <div class="combo-option" data-option-value="4">Option 4</div>
                                </div>
                            </div>
                        </div>
                    </div>    
                `);

                const dynamicSelect = document.querySelector(".dynamic-select .combo-box");
        
                if(dynamicSelect) {
                    _initComboBox(dynamicSelect);
                }
            }
        });
    }

    // const customSelect = new CustomSelect();

    const appendOptionsElement = document.querySelector(".append-options");
    if(appendOptionsElement) {
        appendOptionsElement.addEventListener("click", function() {
            const options = [
                {
                    value: 5,
                    name: 'Option 5',
                    attributes: {
                        test: 'test attr 5',
                    }
                },
                {
                    value: 6,
                    name: 'Option 6',
                    attributes: {
                        test: 'test attr 6',
                        hello: 'world',
                    }
                },
            ]
            const ajaxSelect = document.querySelector('.ajax-select .combo-box');
            _addDynamicOptions(ajaxSelect, options);
            appendOptionsElement.remove();
        });
    }

    const selectsFormElements = document.querySelectorAll(".custom-selects-form");
    if(selectsFormElements.length) {
        selectsFormElements.forEach((selectsFormElement) => {
            selectsFormElement.addEventListener("submit", function(e) {
                e.preventDefault();
                let formData = new FormData(selectsFormElement);

                for (const [key, value] of formData) {
                    console.log(`${key}: ${value}\n`);
                }        
            });
        });
    }

    // Form Validation ***************************
    const withValidationForms = document.querySelectorAll(".with-validation");
    if(withValidationForms.length) {
        withValidationForms.forEach((withValidationForm) => {
            withValidationForm.addEventListener("submit", function (e) {
                let isValid = true;
        
                // error messages cleanup
                const errorMessages = withValidationForm.querySelectorAll(".form-field__message.error");
                if (errorMessages.length) {
                    errorMessages.forEach((errorMessage) => {
                        errorMessage.remove();
                    });
                }
                // invalid classes cleanup
                const invalidFields = withValidationForm.querySelectorAll(".form-field.invalid");
                if (invalidFields.length) {
                    invalidFields.forEach((invalidField) => {
                        invalidField.classList.remove("invalid");
                    });
                }

                // Required
                const requiredFields = withValidationForm.querySelectorAll("[data-required]");
                if (requiredFields.length) {
                    requiredFields.forEach((requiredField) => {
                        if (requiredField.value.trim() === '') {
                            const requiredMessage = requiredField.getAttribute("data-required") || "This Field is Required";
                            let requiredErrorHtml = `<div class="form-field__message error">${requiredMessage}</div>`;

                            requiredField.closest(".form-field").classList.add("invalid");
                            requiredField.closest(".form-field").insertAdjacentHTML("beforeend", requiredErrorHtml);
                            
                            isValid = false;
                        }
                    });
                }

                // Passwords
                let newPassField = withValidationForm.querySelector("[data-new-pass]");
                let repeatPassField = withValidationForm.querySelector("[data-repeat-pass]");
                if (newPassField && repeatPassField) {
                    if (newPassField.value !== repeatPassField.value) {
                        const requiredMessage = repeatPassField.getAttribute("data-new-pass") || "Passwords doesn't match";
                        let requiredErrorHtml = `<div class="form-field__message error">${requiredMessage}</div>`;

                        repeatPassField.closest(".form-field").classList.add("invalid");
                        repeatPassField.closest(".form-field").insertAdjacentHTML("beforeend", requiredErrorHtml);

                        isValid = false;
                    }
                }
        
                const emailElements = withValidationForm.querySelectorAll("[data-email-validation]");
                if (emailElements.length) {
                    emailElements.forEach((emailElement) => {
                        if (!isEmailValid(emailElement.value)) {
                            const requiredMessage = emailElement.getAttribute("data-email-validation") || "Incorrect Email format";
                            let emailErrorHtml = `<div class="form-field__message error">${requiredMessage}</div>`;

                            emailElement.closest(".form-field").classList.add("invalid");
                            emailElement.closest(".form-field").insertAdjacentHTML('beforeend', emailErrorHtml);
                            
                            isValid = false;
                        }
                    });
                }
        
                if (!isValid) {
                    e.preventDefault();
                }
            });
        });
    }

    const inputNumberElements = document.querySelectorAll(".input-number");
    if(inputNumberElements.length) {
        inputNumberElements.forEach((inputNumberElement) => {
            inputNumberElement.addEventListener("input", function(e) {
                const value = getOnlyNumbers(inputNumberElement.value);
        
                // Separator
                if(inputNumberElement.getAttribute("data-input-separator") !== null) {
                    let separator = inputNumberElement.getAttribute("data-input-separator");
                    let valWithSeparator = numberWithSeparator(inputNumberElement.value, separator);
        
                    inputNumberElement.value = valWithSeparator;
                    return;
                }
        
                // Phone Formatter
                if(inputNumberElement.classList.contains("formatted-phone")) {
                    let formattedPhoneNumber = formatPhoneNumber(inputNumberElement.value);
                    
                    if(formattedPhoneNumber) {
                        inputNumberElement.value = formattedPhoneNumber;
                        return;
                    }
                }

                inputNumberElement.value = value;
            });
        });
    }

    // File Upload *******************************
    let uploadedFiles = [];
    const fileUploadInputElements = document.querySelectorAll(".file-upload-input");
    if(fileUploadInputElements.length) {
        fileUploadInputElements.forEach((fileUploadInputElement) => {
            fileUploadInputElement.addEventListener("change", function () {
                let files = fileUploadInputElement.files;
                const mainBlock = fileUploadInputElement.closest(".file-upload");
                const previewBlock = mainBlock.querySelector(".file-upload-preview");
        
                mainBlock.classList.remove("preview-mode");
                uploadedFiles = [];
        
                if(previewBlock) {
                    previewBlock.innerHTML = "";
                }
        
                if (files.length) {
                    mainBlock.classList.add("preview-mode");
                    
                    if(mainBlock.classList.contains("avatar-upload")) {
                        let { name, size, type } = files[0];
                        uploadedFiles = [...uploadedFiles, files[0]];
                        let reader = new FileReader();
        
                        reader.onload = function () {
                            let img = document.createElement('img');
                            img.src = reader.result;
            
                            const avatarImg = mainBlock.querySelector(".avatar-upload__body img");
                            if(avatarImg) {
                                avatarImg.remove();
                            }
                            mainBlock.querySelector(".avatar-upload__body").prepend(img);
                        }
                        reader.readAsDataURL(files[0]);
        
                        console.log("UPLOADED DOCUMENTS LIST ----------- ", uploadedFiles);
                    }
        
                    if(mainBlock.classList.contains("doc-upload")) {
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
                            previewBlock.insertAdjacentHTML('beforeend', previewItemHtml);
                        }
        
                        console.log("UPLOADED DOCUMENTS LIST ----------- ", uploadedFiles);
                    }
                }
            });
        });
    }

    const fileUploadElements = document.querySelectorAll(".file-upload");
    if(fileUploadElements.length) {
        fileUploadElements.forEach((fileUploadElement) => {
            fileUploadElement.addEventListener("click", function(e) {
                if(e.target.closest(".file-upload-item__remove")) {
                    const fileItem = fileUploadElement.querySelector(".file-upload-item");
                    const fileName = fileItem.querySelector(".file-upload-item__name").innerText;
            
                    if(uploadedFiles.length) {
                        // remove item from list
                        uploadedFiles = [...uploadedFiles.filter(file => {
                            return file.name !== fileName
                        })];
            
                        if(!uploadedFiles.length) {
                            fileUploadElement.classList.remove("preview-mode");
                        }
            
                        console.log("UPLOADED DOCUMENTS LIST ----------- ", uploadedFiles);
                    }
            
                    fileItem.remove();
                }
            });
        });
    }

    document.addEventListener('click', function (e) {
        const activeLangSwitcher = document.querySelector(".lang-switcher.active");
        const activeModalElements = document.querySelectorAll(".modal.active");
        const popoverActiveContainers = document.querySelectorAll(".popover-container.active");
        const activeTogglerElements = document.querySelectorAll(".toggler_global.active");

        if (activeLangSwitcher && !e.target.closest(".lang-switcher")) {
            activeLangSwitcher.classList.remove("active");

            scrollNone();
        }
        if (activeModalElements.length && !e.target.closest(".modal__wrapper") && !e.target.closest("[data-modal]")) {
            activeModalElements.forEach((activeModalElement) => {
                activeModalElement.classList.remove("active");
            });

            scrollNone();
        }
        if (popoverActiveContainers.length && !e.target.closest(".popover") && !e.target.closest(".popover-trigger")) {
            popoverActiveContainers.forEach((popoverActiveContainer) => {
                popoverActiveContainer.classList.remove("active");
            });

            scrollNone();
        }
        if (activeTogglerElements.length && !e.target.closest(".toggler_global")) {
            activeTogglerElements.forEach((activeTogglerElement) => {
                activeTogglerElement.classList.remove("active");
            });

            scrollNone();
        }

        if (e.target.closest(".toast-close")) {
            removeToast(e.target);
        }

        e.stopPropagation();
    });
});

// Scroll
document.addEventListener("scroll", function () {
    headerFixed();
});
