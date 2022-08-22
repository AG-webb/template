function changeSelectbox() {
	// Classnames
	const selectbox = ".combo-box";
	const selectboxSelected = ".combo-box-selected";
	const selectboxSelectedWrap = ".combo-box-selected-wrap";
	const selectboxPlaceholder = ".combo-box-placeholder";
	const selectboxDropdown = ".combo-box-dropdown";
	const selectboxOptions = ".combo-box-options";
	const selectboxOption = ".combo-option";
	const selectboxOptionFocused = ".combo-option_focused";
	const selectboxSearch = ".combo-box-search";
	const tagModeClass = "tag-mode";
	const tagWrappertClass = "combo-box-tags";
	const tagElementClass = "combo-box-tag";
	const maxItemsShow = 3;


	// Other functions
	$('html').on("click", function () {
		$(selectboxSelected).removeClass("active");
		$(selectboxDropdown).removeClass('opened');
		$(selectboxOption).removeClass(selectboxOptionFocused.replace(".", ""));
		if ($(selectbox).hasClass("searchable")) {
			$(selectbox).find(selectboxSearch).remove();
		}
	});

	$(selectboxDropdown).on("click", function (e) {
		e.stopPropagation();
	});

	$(selectbox).each(function () {
		const selectDiv = $(this);
		const selectboxName = $(this).attr("data-combo-name");
		const selectOption = $(this).find(selectboxOption);
		const placeholderElement = $(this).find(selectboxPlaceholder);
		let currentTabIndex = -1;

		$(selectDiv).on('keydown', function (e) {
			let keyCode = e.keyCode || e.which;
			const arrow = { tab: 9, enter: 13, up: 38, down: 40, esc: 27, backspace: 8 };

			if (keyCode === arrow.up && selectDiv.children(selectboxSelected).hasClass("active")) {
				// Arrow Up
				if (currentTabIndex > 0) {
					currentTabIndex--;
				}

				let optionTop = selectOption.not('.hide').eq(currentTabIndex).position().top;
				let optionsPaddingTop = parseInt($(selectboxOptions).css('padding-top'));
				if(optionTop < optionsPaddingTop) {
					selectDiv.find(selectboxOptions).scrollTop(selectDiv.find(selectboxOptions).scrollTop() - selectOption.eq(0).innerHeight());
				}
			} else if (keyCode === arrow.down && selectDiv.children(selectboxSelected).hasClass("active")) {
				// Arrow Down
				if (currentTabIndex < selectOption.not('.hide').length - 1) {
					currentTabIndex++;
				}

				if (currentTabIndex >= 5) {
					selectDiv.find(selectboxOptions).scrollTop(selectDiv.find(selectboxOptions).scrollTop() + selectOption.eq(0).innerHeight());
				}
			} else if (keyCode === arrow.enter && selectDiv.children(selectboxSelected).hasClass("active")) {
				// Enter
				if($(selectboxOptionFocused).length) {
					$(selectboxOptionFocused).click();
				} else {
					selectDiv.find(selectboxSelectedWrap).text(selectDiv.find(selectboxSelectedWrap).text() + $(selectboxSearch).val());
				}
				$(selectboxSearch).val("");
				$(selectOption).removeClass("hide");
			} else if (keyCode === arrow.esc && selectDiv.children(selectboxSelected).hasClass("active")) {
				// Escape
				selectDiv.find(selectboxDropdown).removeClass('opened');
				selectDiv.find(selectboxSelected).removeClass("active");
				selectOption.removeClass(selectboxOptionFocused.replace(".", ""));
			} else if (keyCode === arrow.backspace && selectDiv.children(selectboxSelected).hasClass("active")) {
				// Backspace
				if(selectDiv.find(selectboxSearch).val() === "" && selectDiv.attr("data-combo-value")) {
					let lastSelectedValue = getLastSelectedValue(selectDiv.attr("data-combo-value"));
					selectDiv.find(`${selectboxOption}[data-option-value="${lastSelectedValue}"]`).click();
				}
			}

			selectOption.removeClass(selectboxOptionFocused.replace(".", ""));
			selectOption.not('.hide').eq(currentTabIndex).addClass(selectboxOptionFocused.replace(".", ""));
		});

		// Create a 'select' tag with 'option's and its values, and append it in Selectbox
		$(this).append("<select name='" + selectboxName + "' style='display:none'><option></option></select>");

		selectOption.each(function () {
			let selectCurrent = $(this),
				selectOptionVal = $(this).text(),
				selectOptionData = $(this).attr("data-option-value");

			selectDiv.children('select').append("<option value='" + selectOptionData + "'>" + selectOptionVal + "</option>");

			// Disabled,selected options
			selectDiv.find("option").each(function () {
				let optionCurrent = $(this);

				if (selectCurrent.hasClass("disabled") && optionCurrent.attr("value") === selectCurrent.attr("data-option-value")) {
					optionCurrent.attr("disabled", true);
				}

				if (selectCurrent.hasClass("selected") && optionCurrent.attr("value") === selectCurrent.attr("data-option-value")) {
					optionCurrent.attr("selected", true);
					selectDiv.find('select').val(optionCurrent.val()).change();
					selectDiv.find(selectboxSelectedWrap).html(selectCurrent.html());
				}
			});
		});

		// Dropdown function
		selectDiv.children(selectboxSelected).on("click", function (e) {
			e.stopPropagation();
			currentTabIndex = -1;

			if (!e.target.closest("." + tagElementClass) && !e.target.closest(selectboxSearch)) {
				$(selectboxDropdown).removeClass('opened');
				$(selectbox).find(selectboxSearch).remove();

				if ($(this).hasClass("active")) {
					$(selectboxSelected).removeClass("active");
					$(this).parent().children(selectboxDropdown).removeClass('opened');
				} else {
					$(selectboxSelected).removeClass("active");
					$(this).addClass("active");
					$(this).parent().children(selectboxDropdown).addClass('opened');

					if (selectDiv.hasClass("searchable")) {
						$(this).append(`<input type="text" class="${selectboxSearch.replace(".", "")}" />`).find(selectboxSearch).focus();
					}
				}
			}

			// Remove tag
			if (e.target.closest("." + tagElementClass + "__remove")) {
				let value = $(e.target).closest("." + tagElementClass).attr("data-tag-value");

				multiData = [...multiData.filter(data => data.value !== value)];
				let [multiValues, multiValuesArray, multiTexts] = getMultiVars(multiData);

				$(this).closest(selectbox).find("select").val(multiValuesArray).change();
				$(this).closest(selectbox).attr('value', multiValues);
				selectDiv.find(selectboxOption + `[data-option-value="${value}"]`).removeClass('multiSelected');

				if (multiData.length) {
					let tagsTemplate = getTagsTemplate(multiData, tagElementClass);
					$(this).closest(selectbox).find(selectboxSelectedWrap).html(tagsTemplate);
				} else {
					$(this).closest(selectbox).find(selectboxSelectedWrap).html(placeholderElement);
					$(this).closest(selectbox).removeAttr('value');
				}
			}
		});

		// Value selecting
		selectDiv.find(selectboxOption).on("click", function () {
			if ($(this).siblings(selectboxOption).hasClass("selected")) {
				$(this).siblings(selectboxOption).removeClass("selected");
				$(this).addClass("selected");
			} else {
				if (!selectDiv.hasClass("multiple")) {
					$(this).addClass("selected");
				}
			}

			$(this).closest(selectboxDropdown).removeClass('opened');
			$(this).closest(selectbox).find(selectboxSelected).removeClass("active");
			if (!selectDiv.hasClass("multiple")) {
				$(this).closest(selectbox).attr('data-combo-value', $(this).attr("data-option-value"));
				$(this).closest(selectbox).find("select").val($(this).attr("data-option-value")).change();
				$(this).closest(selectbox).find(selectboxSelectedWrap).html($(this).html());
			}
		});

		// Multiple select with its parametres
		let multiData = [];

		if (selectDiv.hasClass("multiple")) {
			selectDiv.children('select').attr("multiple", true);

			selectDiv.find(selectOption).on("click", function (event) {
				$(this).closest(selectboxDropdown).addClass('opened');
				$(this).closest(selectbox).find(selectboxSelected).addClass('active');

				// Value Unselecting func.
				if ($(this).hasClass('multiSelected')) {
					$(this).removeClass('multiSelected');
					let value = $(this).attr("data-option-value");

					multiData = [...multiData.filter(data => data.value !== value)];
					let [multiValues, multiValuesArray, multiTexts] = getMultiVars(multiData);

					$(this).closest(selectbox).find("select").val(multiValuesArray).change();
					$(this).closest(selectbox).attr('data-combo-value', multiValues);

					if (multiData.length) {
						if (multiData.length > maxItemsShow && !$(this).closest(selectbox).hasClass(tagModeClass)) {
							$(this).closest(selectbox).find(selectboxSelectedWrap).text(multiData.length + " selected");
						} else {
							if ($(this).closest(selectbox).hasClass(tagModeClass)) {
								let tagsTemplate = getTagsTemplate(multiData, tagElementClass);
								$(this).closest(selectbox).find(selectboxSelectedWrap).html(tagsTemplate);
							} else {
								$(this).closest(selectbox).find(selectboxSelectedWrap).text(multiTexts);
							}
						}
					} else {
						$(this).closest(selectbox).find(selectboxSelectedWrap).html(placeholderElement);
						$(this).closest(selectbox).removeAttr('data-combo-value');
					}
				} else {
					// Value Selecting func.
					$(this).addClass('multiSelected');
					let value = $(this).attr("data-option-value");
					let text = $(this).text();

					multiData = [...multiData, { value, text }];
					let [multiValues, multiValuesArray, multiTexts] = getMultiVars(multiData);

					$(this).closest(selectbox).find("select").val(multiValuesArray).change();
					$(this).closest(selectbox).attr('data-combo-value', multiValues);
					if ($(this).closest(selectbox).hasClass(tagModeClass)) {
						let tagsTemplate = getTagsTemplate(multiData, tagElementClass);
						$(this).closest(selectbox).find(selectboxSelectedWrap).html(tagsTemplate);
					} else {
						$(this).closest(selectbox).find(selectboxSelectedWrap).text(multiTexts);

						if (multiData.length > maxItemsShow) {
							$(this).closest(selectbox).find(selectboxSelectedWrap).text(multiData.length + " selected");
						}
					}

					// if(multiData.length == selectDiv.find(selectOption).length){
					// 	$(this).closest(selectbox).find(selectboxSelectedWrap).text("All selected!");
					// }
				}
			});

			let selectedAttrOptionsMultiple = new Array();
			if (selectDiv.find('.selected').length > 1) {
				let selectedValue = selectDiv.find('.selected');

				for (let i = 0; i < selectedValue.length; i++) {
					selectedAttrOptionsMultiple.push($(selectedValue[i]).attr("data-option-value"));
				}

				selectDiv.find(selectboxSelectedWrap).text(selectedAttrOptionsMultiple.join(','));

				if (selectedAttrOptionsMultiple.length > maxItemsShow) {
					selectDiv.find(selectboxSelectedWrap).text(selectedAttrOptionsMultiple.length + " selected");
				}

				// if(selectedAttrOptionsMultiple.length == selectDiv.find(selectOption).length){
				// 	selectDiv.find(selectboxSelectedWrap).text("All selected!");
				// }

				selectDiv.find("select").val(selectedAttrOptionsMultiple).change();
			}
		}

		// Search Functionallity
		if (selectDiv.hasClass("searchable")) {
			selectDiv.on("input", selectboxSearch, function (e) {
				let val = $(this).val();

				if (val.trim().length) {
					val = val.toUpperCase();

					selectDiv.find(selectOption).each(function () {
						let optionVal = $(this).text();

						if (optionVal.toUpperCase().indexOf(val) > -1) {
							$(this).removeClass("hide");
						} else {
							$(this).addClass("hide");
						}
					});
				} else {
					selectDiv.find(selectOption).removeClass("hide");
				}
			});
		}
	});

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
		let selectedTags = `<div class="${tagWrappertClass}">`;

		array.map(({ value, text }) => {
			selectedTags = selectedTags +
				`<div class="${elementClass}" data-tag-value="${value}">
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
}


document.addEventListener("DOMContentLoaded", function () {
	changeSelectbox();
});