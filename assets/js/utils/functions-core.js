function isEmailValid(email) {
    var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
}

function formatPhoneNumber(number) {
    let match = number.match(/^(\d{3})(\d{2})(\d{2})(\d{2})(\d{2})$/);

    if (match) {
        return "(+" + match[1] + ") " + match[2] + " " + match[3] + " " + match[4] + " " + match[5];
    };

    return null
}

function numberWithSeparator(value, separator) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

function getOnlyNumbers(str) {
    return str.replace(/[^\d]/g, '');
}

function dynamicAppendInit() {
    const dataAppendElements = document.querySelectorAll("[data-append]");
    if (dataAppendElements.length) {
        dataAppendElements.forEach((dataAppendElement) => {
            let [mediaSize, appendBlockClass] = dataAppendElement.getAttribute("data-append").split(", ");

            if (window.innerWidth < mediaSize) {
                const appendBlockElement = document.querySelector(appendBlockClass);
                const isElementAppended = appendBlockElement && !!appendBlockElement.querySelector(dataAppendElement.getAttribute("class"));

                console.log(dataAppendElement);
                if (appendBlockElement && !isElementAppended) {
                    appendBlockElement.append(dataAppendElement);
                }
            }
        });
    }
}

// function makeSticky(selector) {
//     let element = $(selector);
//     let elementOffsetTop = element.offset().top;
//     let scrollTop = $(document).scrollTop();

//     $(document).bind("ready scroll", function () {
//         scrollTop = $(document).scrollTop();

//         if (scrollTop >= elementOffsetTop) {
//             element.addClass("sticky-element");
//         } else {
//             element.removeClass("sticky-element");
//         }
//     });
// }

function tabsInit() {
    const tabElements = document.querySelectorAll(".tab");

    if (tabElements.length) {
        tabElements.forEach((tabElement) => {
            tabElement.addEventListener("click", function () {
                let contentId = tabElement.getAttribute("data-tab");

                const thisSiblingTabs = tabElement.closest(".tabs__control").querySelectorAll(".tab");
                if (thisSiblingTabs.length) {
                    thisSiblingTabs.forEach((thisSiblingTab) => {
                        thisSiblingTab.classList.remove("active");
                    });
                }
                tabElement.classList.add("active");

                const thisTabContents = tabElement.closest(".tabs").querySelectorAll(".tab-content");
                if (thisTabContents.length) {
                    thisTabContents.forEach((thisTabContent) => {
                        thisTabContent.classList.remove("active");
                    });
                }

                const thisContentElement = document.getElementById(contentId);
                if (thisContentElement) {
                    thisContentElement.classList.add("active");
                }
            });
        });
    }
}

function generateId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

// function toastMessage(message, type = "default") {
//     let toastContainer = `<div class="toast-messages"></div>`;
//     const toastId = generateId(7);

//     let toastBody = `
//     <div class="toast-message ${type}" data-toast-id="${toastId}">
//         <div class="toast-message-icon">
//             <img src="assets/img/icons/success.svg" alt="success">
//         </div>
//         <span class="helvetica-65">${message}</span>
//         <div class="toast-message__close toast-close">
//             <img src="assets/img/icons/close-white.svg" alt="close">
//         </div>
//     </div>`;

//     if (!$(".toast-messages").length) {
//         $("main").append(toastContainer);
//     }
//     $(".toast-messages").append(toastBody);

//     autoRemoveToast(toastId);
// }

// function autoRemoveToast(id) {
//     new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             $(`[data-toast-id="${id}"]`).addClass("toast-message_hidden");
//             resolve();
//         }, 4000);
//     }).then(function () {
//         setTimeout(function () {
//             $(`[data-toast-id="${id}"]`).remove();

//             if ($(".toast-message").length == 0) {
//                 $(".toast-messages").remove();
//             }
//         }, 500);
//     });
// }

// function removeToast(closeElement, id) {
//     if (!id) {
//         let toast = closeElement.closest(".toast-message");

//         toast.addClass("toast-message_hidden");

//         setTimeout(function () {
//             toast.remove();
//         }, 500);
//     } else {
//         $(`[data-toast-id="${id}"]`).addClass("toast-message_hidden");

//         setTimeout(function () {
//             $(`[data-toast-id="${id}"]`).remove();
//         }, 500);
//     }
// }

function getStyle(target, property) {
    return window.getComputedStyle(target, null).getPropertyValue(property);
};

function popoverSlideInit(target) {
    let targetContainer = target.closest(".popover-container");
    let targetWrap = target.closest(".popover-wrap");
    let targetHeight;
    let distance = 0;
    let isHeadingTouched = false;
    let startPositionY;

    setTimeout(() => {
        targetHeight = target.offsetHeight;
    }, 300);

    target.addEventListener('touchstart', dragElement);
    target.addEventListener('touchmove', draggingElement);
    target.addEventListener('touchend', draggedElement);

    function dragElement(e) {
        isHeadingTouched = false;
        startPositionY = e.touches[0].clientY;
        let offsetTop = target.offsetTop;
        let paddingTop = parseInt(getStyle(target, 'padding-top'));
        let elementTriggerPart = offsetTop + paddingTop;

        if (startPositionY <= elementTriggerPart && startPositionY >= offsetTop) {
            isHeadingTouched = true;
        }
    }

    function draggingElement(e) {
        let posY = e.touches[0].clientY;

        if (isHeadingTouched) {
            targetWrap.classList.add("dragging");
            distance = posY - startPositionY;

            if (distance > 0) {
                target.style.transform = `translateY(${distance}px)`;
                // target.css("transform", `translateY(${distance}px)`);
            } else {
                target.style.transform = `translateY(${distance * 0.1}px)`;
                target.style.setProperty("--negative-offset", `${distance * -0.15}px`);
                // target.css({
                //     "transform": `translateY(${distance * 0.1}px)`,
                //     "--negative-offset": `${distance * -0.15}px`,
                // });
            }
        }
    }

    function draggedElement(e) {
        targetWrap.classList.remove("dragging");
        target.removeAttribute("style");
        let targetHeightHalf = target.offsetHeight / 2;
        const targetWrapHeight = targetWrap.clientHeight - parseFloat(getStyle(targetWrap, 'padding-top')) - parseFloat(getStyle(targetWrap, 'padding-bottom'));

        if(target.offsetHeight > targetWrapHeight) {
            if (distance > (targetWrapHeight / 2)) {
                targetContainer.classList.remove("active");
                scrollNone();
            }
        } else {
            if (distance > targetHeightHalf) {
                targetContainer.classList.remove("active");
                scrollNone();
            }
        }
        distance = 0;
    }
}

function headerFixed() {
    const scrollTop = document.documentElement.scrollTop;
    const headerWrapperElement = document.querySelector(".header__wrapper");

    if (scrollTop <= 5) {
        headerWrapperElement.classList.remove("fixed");
    } else {
        headerWrapperElement.classList.add("fixed");
    }
}

function getDocumentVisibleWidth() {
    return Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );
}

function scrollNone() {
    const body = document.querySelector("body");
    const activeModals = document.querySelectorAll(".modal.active");
    const popoverContainer = document.querySelectorAll(".popover-container.active");
    
    let lockBody = activeModals.length || popoverContainer.length;
    let scrollWidthBeforeFreeze = getDocumentVisibleWidth();

    if (lockBody) {
        body.classList.add("locked");

        let scrollWidthAfterFreeze = getDocumentVisibleWidth();

        if (scrollWidthBeforeFreeze < scrollWidthAfterFreeze) {
            let scrollSpace = scrollWidthAfterFreeze - scrollWidthBeforeFreeze;

            body.paddingRight = scrollSpace + "px";
        }
    } else {
        body.classList.remove("locked");
        body.paddingRight = '';

        if (body.getAttribute("style") === "") {
            body.removeAttribute("style");
        }
        if (body.getAttribute("class") === "") {
            body.removeAttribute("class");
        }
    }
}