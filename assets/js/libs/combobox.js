function changeSelectbox(){
	// Classnames
	let selectbox = ".combo-box",
			selectboxSelected = ".combo-box-selected",
			selectboxDropdown = ".combo-box-dropdown",
			selectboxOption = ".combo-option";
			selectboxSearch = ".combo-box-search input";
			maxItemsShow = 3;
    

	// Other functions
	$('html').on("click",function() {
		$(selectboxSelected).removeClass("active");
		$(selectboxDropdown).removeClass('opened');
	});
	
	$(selectboxDropdown).on("click",function(e){
		e.stopPropagation();
	});

	$(selectbox).each(function(){
		let selectDiv = $(this),
				selectboxName = $(this).attr("data-combo-name"),
				selectOption = $(this).find(selectboxOption),
				defaultTxt = $(this).find(selectboxSelected).html();

		// Specific options
		$(document).on('keydown', selectDiv, function (e) {
		  	let keyCode = e.keyCode || e.which;
		    let arrow = {tab: 9, up: 38, down: 40 };

		    if(keyCode === arrow.tab && !selectDiv.children(selectboxSelected).hasClass("active")){
		    	selectDiv.children(selectboxSelected).addClass("active");
		    	selectDiv.children(selectboxDropdown).addClass('opened');
		    }

		    let c = 0;

			if (keyCode === arrow.up && selectDiv.children(selectboxSelected).hasClass("active")) {
				selectOption.addClass('multiSpan');
			}else if(keyCode === arrow.down && selectDiv.children(selectboxSelected).hasClass("active")){
				selectOption.removeClass('multiSpan');
			}

		});

		// Create a 'select' tag with 'option's and its values, and append it in Selectbox
		$(this).append("<select name='"+selectboxName+"' style='display:none'><option></option></select>");

		selectOption.each(function(){
			let selectCurrent = $(this),
					selectOptionVal = $(this).text(),
					selectOptionData = $(this).attr("data-combo-value");

			selectDiv.children('select').append("<option value='" + selectOptionData + "'>" + selectOptionVal + "</option>");

			// Disabled,selected options
			selectDiv.find("option").each(function(){
				let optionCurrent = $(this);

				if(selectCurrent.hasClass("disabled") && optionCurrent.attr("value") === selectCurrent.attr("data-combo-value")){
					optionCurrent.attr("disabled", true);
				}

				if(selectCurrent.hasClass("selected") && optionCurrent.attr("value") === selectCurrent.attr("data-combo-value")){
					optionCurrent.attr("selected", true);
                    selectDiv.find('select').val(optionCurrent.val()).change();
                    selectDiv.find(selectboxSelected).html(selectCurrent.html());
				}
			});
		});

		// Dropdown function
		selectDiv.children(selectboxSelected).on("click",function(e){
			e.stopPropagation();

			$(selectboxDropdown).removeClass('opened');

			if($(this).hasClass("active")){
				$(selectboxSelected).removeClass("active");
				$(this).parent().children(selectboxDropdown).removeClass('opened');
			}else{
				$(selectboxSelected).removeClass("active");
				$(this).addClass("active");
				$(this).parent().children(selectboxDropdown).addClass('opened');
			}
		});

		// Value selecting
		selectDiv.find(selectboxOption).on("click",function(){
			if($(this).siblings(selectboxOption).hasClass("selected")){
				$(this).siblings(selectboxOption).removeClass("selected");
				$(this).addClass("selected");
			} else {
                if(!selectDiv.hasClass("multiple")) {
                    $(this).addClass("selected");
                }
            }

			$(this).closest(selectboxDropdown).removeClass('opened');
			$(this).closest(selectbox).find(selectboxSelected).removeClass("active");
			$(this).closest(selectbox).attr('data-combo-value',$(this).attr("data-combo-value"));
			$(this).closest(selectbox).find("select").val($(this).attr("data-combo-value")).change();
			$(this).closest(selectbox).find(selectboxSelected).html($(this).html());
		});

		// Multiple(default) select with its parametres
		let multiselectDatas = [],
				multiselectValues = [];

		if(selectDiv.hasClass("multiple-default")){
			selectDiv.children('select').attr("multiple",true);

			selectDiv.find(selectOption).on("click",function(event){
				if (event.ctrlKey){
					$(this).closest(selectboxDropdown).addClass('opened');
					$(this).closest(selectbox).find(selectboxSelected).addClass('active');

					if($(this).hasClass('multiSpan')){
						$(this).removeClass('multiSpan');

						let pos = multiselectValues.indexOf($(this).text());

						multiselectValues.splice(pos,1);

						$(this).closest(selectbox).find("select").val(multiselectValues).change();

						if(multiselectValues.length){
							if(multiselectValues.length > maxItemsShow){
								$(this).closest(selectbox).find(selectboxSelected).text(multiselectValues.length + " selected");
							}else{
								$(this).closest(selectbox).find(selectboxSelected).text(multiselectValues.join(','));
							}
						}else{
							$(this).closest(selectbox).find(selectboxSelected).html(defaultTxt);
						}
					}else{
						$(this).addClass('multiSpan');
						multiselectDatas.push($(this).attr("data-combo-value"));
						multiselectValues.push($(this).text());
						$(this).closest(selectbox).attr('value',multiselectValues.join(','));
						$(this).closest(selectbox).find("select").val(multiselectDatas).change();
						$(this).closest(selectbox).find(selectboxSelected).text(multiselectValues.join(','));

						if(multiselectValues.length > maxItemsShow){
							$(this).closest(selectbox).find(selectboxSelected).text(multiselectValues.length + " selected");
						}

						// if(multiselectValues.length == selectDiv.find(selectOption).length){
						// 	$(this).closest(selectbox).find(selectboxSelected).text("All selected!");
						// }
					}
				}

				if (!event.ctrlKey){
					selectDiv.find(selectOption).removeClass('multiSpan');
				}
			});

			let selectedAttrOptions = [];

			if(selectDiv.find('.selected').length > 1){
				let selectedValue = selectDiv.find('.selected');

				for(let i = 0;i < selectedValue.length;i++ ){
					selectedAttrOptions.push($(selectedValue[i]).attr("data-combo-value"));
				}

				selectDiv.find(selectboxSelected).text(selectedAttrOptions.join(','));

				if(selectedAttrOptions.length > maxItemsShow){
					selectDiv.find(selectboxSelected).text(selectedAttrOptions.length + " selected");
				}

				// if(selectedAttrOptions.length == selectDiv.find(selectOption).length){
				// 	selectDiv.find(selectboxSelected).text("All selected!");
				// }
				selectDiv.find("select").val(selectedAttrOptions).change();
			}
		}


		// Multiple(with checks) select with its parametres
		let multiselectChecksDatas = [],
				multiselectChecksValues = [];

		if(selectDiv.hasClass("multiple")){
			selectDiv.children('select').attr("multiple", true);

			selectDiv.find(selectOption).on("click",function(event){
				$(this).closest(selectboxDropdown).addClass('opened');
				$(this).closest(selectbox).find(selectboxSelected).addClass('active');

				if($(this).hasClass('multiSelected')){
					$(this).removeClass('multiSelected');

					let arrayMulti = multiselectChecksDatas.indexOf($(this).attr("data-combo-value"));
					let arrayMultiValues = multiselectChecksValues.indexOf($(this).text());

					multiselectChecksDatas.splice(arrayMulti,1);
					multiselectChecksValues.splice(arrayMultiValues,1);

					$(this).closest(selectbox).find("select").val(multiselectChecksDatas).change();
                    $(this).closest(selectbox).attr('value',multiselectChecksDatas.join(','));

					if(multiselectChecksValues.length){
						if(multiselectChecksValues.length > maxItemsShow){
							$(this).closest(selectbox).find(selectboxSelected).text(multiselectChecksValues.length + " selected");
						}else{
							$(this).closest(selectbox).find(selectboxSelected).text(multiselectChecksValues.join(', '));
						}
					}else{
						$(this).closest(selectbox).find(selectboxSelected).html(defaultTxt);
                        $(this).closest(selectbox).removeAttr('value');
					}
				} else{
					$(this).addClass('multiSelected');
					multiselectChecksDatas.push($(this).attr("data-combo-value"));
					multiselectChecksValues.push($(this).text());

					$(this).closest(selectbox).attr('value',multiselectChecksDatas.join(','));
					$(this).closest(selectbox).find("select").val(multiselectChecksDatas).change();
					$(this).closest(selectbox).find(selectboxSelected).text(multiselectChecksValues.join(', '));

					if(multiselectChecksValues.length > maxItemsShow){
						$(this).closest(selectbox).find(selectboxSelected).text(multiselectChecksDatas.length + " selected");
					}
					// if(multiselectChecksValues.length == selectDiv.find(selectOption).length){
					// 	$(this).closest(selectbox).find(selectboxSelected).text("All selected!");
					// }
				}
			});

			let selectedAttrOptionsMultiple = new Array();
			if(selectDiv.find('.selected').length > 1){
				let selectedValue = selectDiv.find('.selected');

				for(let i = 0;i < selectedValue.length;i++ ){
					selectedAttrOptionsMultiple.push($(selectedValue[i]).attr("data-combo-value"));
				}
				
				selectDiv.find(selectboxSelected).text(selectedAttrOptionsMultiple.join(','));

				if(selectedAttrOptionsMultiple.length > maxItemsShow){
					selectDiv.find(selectboxSelected).text(selectedAttrOptionsMultiple.length + " selected");
				}

				// if(selectedAttrOptionsMultiple.length == selectDiv.find(selectOption).length){
				// 	selectDiv.find(selectboxSelected).text("All selected!");
				// }

				selectDiv.find("select").val(selectedAttrOptionsMultiple).change();
			}

            // Search Functionallity
            if(selectDiv.hasClass("searchable")) {
                selectDiv.find(selectboxSearch).on("input", function() {
                    let val = $(this).val();

                    if(val.trim().length) {
                        val = val.toUpperCase();

                        selectDiv.find(selectOption).each(function() {
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
		}
	});
}

document.addEventListener("DOMContentLoaded", function(){
	changeSelectbox();
});