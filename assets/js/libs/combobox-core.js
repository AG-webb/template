function initComboBox() {
	const selectBox = ".combo-box";
	const selectBoxSelected = ".combo-box-selected";
	const selectBoxSelectedWrap = ".combo-box-selected-wrap";
	const selectBoxPlaceholder = ".combo-box-placeholder";
	const selectBoxDropdown = ".combo-box-dropdown";
	const selectBoxOptions = ".combo-box-options";
	const selectBoxOption = ".combo-option";
	const selectBoxOptionHidden = "combo-option_hidden";
	const selectBoxOptionFocused = ".combo-option_focused";
	const selectBoxSearch = ".combo-box-search";
	const tagModeClass = "tag-mode";
	const tagWrapperClass = "combo-box-tags";
	const tagElementClass = "combo-box-tag";
	const userAddedOptionClass = "user-added-option";
	const attrName = "data-combo-name";
	const attrValue = "data-combo-value";
	const optionAttrValue = "data-option-value";
	const tagAttrValue = "data-tag-value";
	const maxItemsShow = 3;
	const maxOptionsShow = 5;
	const htmlElement = document.querySelector("html");
	const selectBoxElements = document.querySelectorAll(selectBox);
	const selectBoxSelectedElements = document.querySelectorAll(selectBoxSelected);
	const selectBoxDropdownElements = document.querySelectorAll(selectBoxDropdown);
	const selectBoxOptionsElements = document.querySelectorAll(selectBoxOptions);

	htmlElement.addEventListener("click", closeDropdown);

	selectBoxDropdownElements.forEach((dropdown) => {
		dropdown.addEventListener("click", function(e) {
			e.stopPropagation();
		});
	});

	selectBoxElements.forEach((selectBoxElement) => {
		const selectBoxSelectedElement = selectBoxElement.querySelector(selectBoxSelected);
		const selectBoxName = selectBoxElement.getAttribute(attrName);
		const selectOptions = selectBoxElement.querySelectorAll(selectBoxOption);
		const placeholderElement = selectBoxElement.querySelector(selectBoxPlaceholder);
		let currentTabIndex = -1;
		let multiData = [];

		createSelectElement(selectBoxElement, selectBoxName, selectOptions);

		// Keyboard Control
		selectBoxElement.addEventListener("keydown", function(e) {
			// Search Functional
			filterOptionsWithQuery(e);

			let keyCode = e.keyCode || e.which;
			const arrow = { tab: 9, enter: 13, up: 38, down: 40, esc: 27, backspace: 8 };
			const isSelectBoxSelectedActive = selectBoxElement.querySelector(selectBoxSelected).classList.contains("active")
	
			if (keyCode === arrow.up && isSelectBoxSelectedActive) {
				// Arrow Up
				decreaseTabIndex();
			} else if (keyCode === arrow.down && isSelectBoxSelectedActive) {
				// Arrow Down
				increaseTabIndex();
			} else if (keyCode === arrow.enter && isSelectBoxSelectedActive) {
				const selectBoxOptionFocusedElement = document.querySelector(selectBoxOptionFocused)
				// Enter
				if (selectBoxOptionFocusedElement) {
					selectBoxOptionFocusedElement.click();
				} else {
					if(e.target.classList.contains("allow-custom-options")) {
						addUserOption(e.target);
					}
				}
	
				resetSearchInput(e.target);
			} else if (keyCode === arrow.esc && isSelectBoxSelectedActive) {
				// Escape
				closeDropdown();
			} else if (keyCode === arrow.backspace && isSelectBoxSelectedActive) {
				// Backspace
				if (selectBoxElement.querySelector(selectBoxSearch).value === "" && selectBoxElement.getAttribute(attrValue)) {
					let lastSelectedValue = getLastSelectedValue(selectBoxElement.getAttribute(attrValue));
	
					removeMultiOption($(this), lastSelectedValue);
				}
			}
	
			moveFocus();
		});
		
		// Dropdown function
		selectBoxSelectedElement.addEventListener("click", function(e) {
			e.stopPropagation();
			currentTabIndex = -1;
	
			if (!e.target.closest("." + tagElementClass) && !e.target.closest(selectBoxSearch)) {
				toggleDropdown(e.target);
			}
	
			// Remove tag
			if (e.target.closest("." + tagElementClass + "__remove")) {
				let value = $(e.target).closest("." + tagElementClass).getAttribute(tagAttrValue);
	
				removeMultiOption($(this), value);
			}
		});

		// Single
		if (!selectBoxElement.classList.contains("multiple")) {
			selectOptions.forEach((option) => {
				option.addEventListener("click", function () {
					const optionSelectBox = option.closest(selectBox);
					const optionSelect = optionSelectBox.querySelector("select");

					if (option.classList.contains("selected")) {
						option.classList.remove("selected");
					} else {
						option.closest(selectBoxDropdown).querySelectorAll(selectBoxOption).forEach((option) => {
							option.classList.remove("selected");
						});
						option.classList.add("selected");
					}
	
					closeDropdown();
					optionSelect.setAttribute(attrValue, option.getAttribute(optionAttrValue));
					optionSelect.value = option.getAttribute(optionAttrValue)
					optionSelect.dispatchEvent(new Event("change"));
					optionSelectBox.querySelector(selectBoxSelectedWrap).innerHTML = option.innerHTML;
				});
			});
		}

		// Multiple
		if (selectBoxElement.classList.contains("multiple")) {
			// Sync multiData array with default selected options
			if(selectBoxElement.getAttribute(attrValue)) {
				selectBoxElement.querySelectorAll(selectBoxOption + ".selected").forEach((element) => {
					let text = element.textContent;
					let value = element.getAttribute(optionAttrValue);
					
					multiData = [...multiData, {value, text}];
				});
			}

			selectOptions.forEach((option) => {
				option.addEventListener("click", function () {
					// VALUE UNSELECTING
					if (option.classList.contains('selected')) {
						option.classList.remove('selected');
						let value = option.getAttribute(optionAttrValue);
	
						removeMultiOption(option, value);
					}
					// VALUE SELECTING
					else {
						option.classList.add('selected');
						let value = option.getAttribute(optionAttrValue);
						let text = option.textContent;
	
						addMultiOption(option, { value, text });
					}
				});
			});
		}

		// Search Functionality
		const filterOptionsWithQuery = (e, options) => {
			if(e.target.classList.contains(selectBoxSearch.replace(".", ""))) {
				const thisSearch = e.target;
				let val = thisSearch.value;

				if (val.trim().length) {
					val = val.toUpperCase();

					selectOptions.forEach((option) => {
						let optionVal = option.textContent;

						if (optionVal.toUpperCase().indexOf(val) > -1) {
							option.classList.remove(selectBoxOptionHidden);
						} else {
							option.classList.add(selectBoxOptionHidden);
						}
					});
				} else {
					selectOptions.forEach((option) => {
						option.classList.remove(selectBoxOptionHidden);
					});
				}
			}
		}

		const addMultiOption = (target, newOption) => {
			multiData = [...multiData, newOption];
			let [multiValues, multiValuesArray, multiTexts] = getMultiVars(multiData);
			const targetSelectBox = target.closest(selectBox);
			const targetSelect = targetSelectBox.querySelector("select");
			const targetSelectWrap = targetSelectBox.querySelector(selectBoxSelectedWrap);
			
			targetSelect.value = multiValuesArray;
			targetSelect.dispatchEvent(new Event('change'));
			targetSelectBox.setAttribute(attrValue, multiValues);
			
			if (targetSelectBox.classList.contains(tagModeClass)) {
				let tagsTemplate = getTagsTemplate(multiData, tagElementClass);
				targetSelectWrap.innerHTML = tagsTemplate;
			} else {
				targetSelectWrap.textContent = multiTexts;
				
				if (multiData.length > maxItemsShow) {
					const maxItemsShowText = getMaxItemsShowText(multiTexts);
					const restOptionsCount = multiData.length - maxItemsShow;
					targetSelectWrap.textContent = (maxItemsShowText + ` +${restOptionsCount}`);
				}
			}
	
			// if(multiData.length == selectOptions.length){
			// 	targetSelectWrap.textContent = "All selected!";
			// }
		}
	
		const removeMultiOption = (target, value) => {
			multiData = [...multiData.filter(data => data.value !== value)];
			let [multiValues, multiValuesArray, multiTexts] = getMultiVars(multiData);
			const selectBoxContainer = target.closest(selectBox);
			const selectBoxWrap = selectBoxContainer.querySelector(selectBoxSelectedWrap);
			const targetSelect = selectBoxContainer.querySelector("select");
			const selectBoxContainerSearch = selectBoxContainer.querySelector("select");
	
			targetSelect.value = multiValuesArray;
			targetSelect.dispatchEvent(new Event('change'));
			selectBoxContainer.setAttribute(attrValue, multiValues);
			selectBoxContainer.querySelector(selectBoxOption + `[${optionAttrValue}="${value}"]`).classList.remove('selected');
	
			if (multiData.length) {
				if (multiData.length > maxItemsShow && !selectBoxContainer.classList.contains(tagModeClass)) {
					const maxItemsShowText = getMaxItemsShowText(multiTexts);
					const restOptionsCount = multiData.length - maxItemsShow;
					selectBoxWrap.textContent = (maxItemsShowText + ` +${restOptionsCount}`);
				} else {
					if (selectBoxContainer.classList.contains(tagModeClass)) {
						let tagsTemplate = getTagsTemplate(multiData, tagElementClass);
						selectBoxWrap.innerHTML = tagsTemplate;
						selectBoxContainer.querySelector(selectBoxOption + `[${optionAttrValue}="${value}"]`).classList.remove('selected');
					} else {
						selectBoxWrap.textContent = multiTexts;
					}
				}
			} else {
				selectBoxWrap.innerHTML = placeholderElement.innerHTML;
				selectBoxContainer.removeAttribute(attrValue);
				if(selectBoxContainerSearch) {
					selectBoxContainerSearch.focus();
				}
			}
	
			let targetSelectOption = selectBoxContainer.querySelector(`option[value="${value}"]`);
			if (targetSelectOption && targetSelectOption.classList.contains(userAddedOptionClass)) {
				targetSelectOption.remove();
			}
		}

		const addUserOption = (target) => {
			const selectBoxSearchElement = target.querySelector(selectBoxSearch);
			let value = selectBoxSearchElement.value;
			let containsValue = false;
			multiData.map((data) => data.text === value ? containsValue = true : null);

			if (!containsValue) {
				selectBoxElement.querySelector("select").insertAdjacentHTML("beforeend", `<option class="${userAddedOptionClass}" value="${value}">${value}</option>`);
				addMultiOption(selectBoxElement, { value, text: value });
			}
		}

		const decreaseTabIndex = () => {
			if (currentTabIndex > 0) {
				currentTabIndex--;
			}

			// TODO: get offset top relative to view not element height
			let optionTop = getVisibleOptions(selectBoxElement)[currentTabIndex].offsetTop;
			let optionsPaddingTop = parseInt(window.getComputedStyle(selectBoxOptionsElements[0], null).getPropertyValue('padding-top'));

			if (optionTop < optionsPaddingTop) {
				scrollToFocusedOption(selectBoxElement, "up");
			}
		}

		const increaseTabIndex = () => {
			const visibleSelectOptions = getVisibleOptions(selectBoxElement);
			
			if (currentTabIndex < visibleSelectOptions.length - 1) {
				currentTabIndex++;
			}

			if (currentTabIndex >= maxOptionsShow) {
				scrollToFocusedOption(selectBoxElement, "down");
			}
		}

		const resetSearchInput = (target) => {
			const selectBoxSearchElement = target.closest(selectBox).querySelector(selectBoxSearch);
			selectBoxSearchElement.value = ""
			selectOptions.forEach((option) => {
				option.classList.remove(selectBoxOptionHidden);
			});
		}

		const moveFocus = () => {
			selectOptions.forEach((option) => {
				option.classList.remove(selectBoxOptionFocused.replace(".", ""));
			});
			
			const visibleSelectOptions = getVisibleOptions(selectBoxElement);
			if (currentTabIndex !== -1) {
				visibleSelectOptions[currentTabIndex].classList.add(selectBoxOptionFocused.replace(".", ""));
			} else if(visibleSelectOptions.length === 1) {
				visibleSelectOptions[0].classList.add(selectBoxOptionFocused.replace(".", ""));
			}
		}
	});

	function scrollToFocusedOption(target, position) {
		let thisOptionsWrapper = target.closest(selectBox).querySelector(selectBoxOptions);

		if (position === "down") {
			thisOptionsWrapper.scrollTop = thisOptionsWrapper.scrollTop + target.querySelectorAll(selectBoxOption)[0].offsetHeight;
		} else {
			thisOptionsWrapper.scrollTop = thisOptionsWrapper.scrollTop - target.querySelectorAll(selectBoxOption)[0].offsetHeight;
		}
	}

	function closeDropdown() {
		selectBoxSelectedElements.forEach((element) => {
			element.classList.remove("active");
		});
		selectBoxDropdownElements.forEach((dropdown) => {
			dropdown.classList.remove("opened");
		});
		selectBoxOptionsElements.forEach((option) => {
			option.classList.remove(selectBoxOptionFocused.replace(".", ""));
		});
		selectBoxElements.forEach((select) => {
			if (select.classList.contains("searchable")) {
				const selectSearch = select.querySelector(selectBoxSearch);
				
				if(selectSearch) {
					selectSearch.remove();
				}
			}
		});
	}

	function toggleDropdown(target) {
		selectBoxElements.forEach((select) => {
			const selectSearch = select.querySelector(selectBoxSearch);

			if(selectSearch) {
				selectSearch.remove();
			}
		});
		selectBoxDropdownElements.forEach((dropdown) => {
			dropdown.classList.remove("opened");
		});

		if (target.classList.contains("active")) {
			target.closest(selectBox).querySelector(selectBoxSelected).classList.remove("active");
			target.closest(selectBox).querySelector(selectBoxDropdown).classList.remove('opened');
		} else {
			selectBoxSelectedElements.forEach((selectedElement) => {
				selectedElement.classList.remove("active");
			});
			target.classList.add("active");
			target.closest(selectBox).querySelector(selectBoxDropdown).classList.add('opened');

			if (target.closest(selectBox).classList.contains("searchable")) {
				target.insertAdjacentHTML("beforeend", `<input type="text" class="${selectBoxSearch.replace(".", "")}" />`);
				if(target.querySelector(selectBoxSearch)) {
					target.querySelector(selectBoxSearch).focus();
				}
			}
		}
	}

	function createSelectElement(selectBoxElement, name, options) {
		let multiple = false;
		let multiData = [];
		if(selectBoxElement.classList.contains("multiple")) {
			multiple = true;
		}

		selectBoxElement.insertAdjacentHTML("beforeend", `<select name="${name}" style='display:none' ${multiple ? "multiple='multiple'" : ''}></select>`);

		options.forEach((option) => {
			const text = option.textContent;
			const value = option.getAttribute(optionAttrValue);
			const isDisabled = option.classList.contains("disabled");
			const isSelected = option.classList.contains("selected");
			const optionSelect = option.closest(selectBox).querySelector('select');
			
			optionSelect.insertAdjacentHTML(
				"beforeend",
				`<option ${isSelected ? "selected='selected'" : ""} ${isDisabled ? "disabled='disabled'" : ""} value="${value}">${text}</option>`
			);
			
			
			if(isSelected) {
				if(selectBoxElement.classList.contains("multiple")) {
					// DUPLICATED CODE NEED TO REFACTOR THIS!!!!!!!!!! ***************************************
					multiData = [...multiData, {value, text}];
					let [multiValues, multiValuesArray, multiTexts] = getMultiVars(multiData);
			
					selectBoxElement.closest(selectBox).setAttribute(attrValue, multiValues);
			
					if (selectBoxElement.closest(selectBox).classList.contains(tagModeClass)) {
						let tagsTemplate = getTagsTemplate(multiData, tagElementClass);
						selectBoxElement.closest(selectBox).querySelector(selectBoxSelectedWrap).innerHTML = tagsTemplate;
					} else {
						selectBoxElement.closest(selectBox).querySelector(selectBoxSelectedWrap).textContent = multiTexts;
			
						if (multiData.length > maxItemsShow) {
							const maxItemsShowText = getMaxItemsShowText(multiTexts);
							const restOptionsCount = multiData.length - maxItemsShow;
							selectBoxElement.closest(selectBox).querySelector(selectBoxSelectedWrap).textContent = (maxItemsShowText + ` +${restOptionsCount}`);
						}
					}
					// **************************************************************************************************
				} else {
					optionSelect.value = option.value;
					optionSelect.dispatchEvent(new Event('change'));
					option.closest(selectBox).querySelector(selectBoxSelectedWrap).innerHTML = option.innerHTML;
				}
			}
		});
	}

	function getLastSelectedValue(values) {
		let selectedValues = values.split(", ");
		let lastSelectedValue = selectedValues[selectedValues.length - 1];
		return lastSelectedValue;
	}

	function getMultiVars(array) {
		let multiValues = "";
		let multiValuesArray = [];
		let multiTexts = "";

		array.map((data, index) => {
			if (index === array.length - 1) {
				multiValues += data.value;
				multiTexts += data.text;
			} else {
				multiValues += data.value + ", ";
				multiTexts += data.text + ", ";
			}
			multiValuesArray = [...multiValuesArray, data.value];
		});

		return [multiValues, multiValuesArray, multiTexts];
	}

	function getTagsTemplate(array, elementClass = tagElementClass) {
		let selectedTags = `<div class="${tagWrapperClass}">`;

		array.map(({ value, text }) => {
			selectedTags = selectedTags +
				`<div class="${elementClass}" ${tagAttrValue}="${value}">
					<div class="${elementClass}__value">
						${text}
					</div>
					<div class="${elementClass}__remove">
						<img src="assets/img/icons/close-white.svg" alt="close">
					</div>
				</div>`
		});
		selectedTags += "</div>";

		return selectedTags;
	}

	function getVisibleOptions(selectBoxElement) {
		return selectBoxElement.querySelectorAll(`${selectBoxOption}:not(.${selectBoxOptionHidden})`);
	}

	function getMaxItemsShowText(text) {
		return text.split(", ").slice(0, maxItemsShow).join(", ");
	}
}

document.addEventListener("DOMContentLoaded", function () {
	initComboBox();
});