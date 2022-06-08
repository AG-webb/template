function changeSelectbox(){
	// Classnames
	var selectbox = ".combo-box",
			selectboxSelected = ".combo-box-selected",
			selectboxDropdown = ".combo-box-dropdown",
			selectboxOption = ".combo-option";

	// Other functions
	$('html').on("click",function() {
		$(selectboxSelected).removeClass("active");
		$(selectboxDropdown).removeClass('opened');
	});
	
	$(selectboxDropdown).on("click",function(e){
		e.stopPropagation();
	});

	$(selectbox).each(function(){
		var selectDiv = $(this),
				selectboxName = $(this).attr("data-combo-name"),
				selectOption = $(this).find(selectboxOption),
				defaultTxt = $(this).find(selectboxSelected).text();

		// Specific options
		$(document).on('keydown', selectDiv, function (e) {
		  	var keyCode = e.keyCode || e.which;
		    var arrow = {tab: 9, up: 38, down: 40 };

		    if(keyCode === arrow.tab && !selectDiv.children(selectboxSelected).hasClass("active")){
		    	selectDiv.children(selectboxSelected).addClass("active");
		    	selectDiv.children(selectboxDropdown).addClass('opened');
		    }

		    var c = 0;

			if (keyCode === arrow.up && selectDiv.children(selectboxSelected).hasClass("active")) {
				selectOption.addClass('multiSpan');
			}else if(keyCode === arrow.down && selectDiv.children(selectboxSelected).hasClass("active")){
				selectOption.removeClass('multiSpan');
			}

		});

		// Create a 'select' tag with 'option's and its values, and append it in Selectbox
		$(this).append("<select name='"+selectboxName+"' style='display:none'><option></option></select>");

		selectOption.each(function(){
			var selectCurrent = $(this),
					selectOptionVal = $(this).text(),
					selectOptionData = $(this).attr("data-combo-value");

			selectDiv.children('select').append("<option value='" + selectOptionData + "'>" + selectOptionVal + "</option>");

			// Disabled,selected options
			selectDiv.find("option").each(function(){
				var optionCurrent = $(this);

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
			}

			$(this).parent().removeClass('opened');
			$(this).parents(selectbox).find(selectboxSelected).removeClass("active");
			$(this).closest(selectbox).attr('data-combo-value',$(this).attr("data-combo-value"));
			$(this).closest(selectbox).find("select").val($(this).attr("data-combo-value")).change();
			$(this).parent().siblings(selectboxSelected).html($(this).html());
		});

		// Multiple(default) select with its parametres
		var multiselectDatas = [],
				multiselectValues = [];

		if(selectDiv.hasClass("multiple-default")){
			selectDiv.children('select').attr("multiple",true);

			selectDiv.find(selectOption).on("click",function(event){
				if (event.ctrlKey){
					$(this).parent(selectboxDropdown).addClass('opened');
					$(this).parents(selectbox).find(selectboxSelected).addClass('active');

					if($(this).hasClass('multiSpan')){
						$(this).removeClass('multiSpan');

						var pos = multiselectValues.indexOf($(this).text());

						multiselectValues.splice(pos,1);

						$(this).closest(selectbox).find("select").val(multiselectValues).change();

						if(multiselectValues.length){
							if(multiselectValues.length > 2){
								$(this).parent().siblings(selectboxSelected).text(multiselectValues.length + " selected");
							}else{
								$(this).parent().siblings(selectboxSelected).text(multiselectValues.join(','));
							}
						}else{
							$(this).parent().siblings(selectboxSelected).text(defaultTxt);
						}
					}else{
						$(this).addClass('multiSpan');
						multiselectDatas.push($(this).attr("data-combo-value"));
						multiselectValues.push($(this).text());
						$(this).closest(selectbox).attr('value',multiselectValues.join(','));
						$(this).closest(selectbox).find("select").val(multiselectDatas).change();
						$(this).parent().siblings(selectboxSelected).text(multiselectValues.join(','));

						if(multiselectValues.length > 2){
							$(this).parent().siblings(selectboxSelected).text(multiselectValues.length + " selected");
						}

						if(multiselectValues.length == selectDiv.find(selectOption).length){
							$(this).parent().siblings(selectboxSelected).text("All selected!");
						}
					}
				}

				if (!event.ctrlKey){
					selectDiv.find(selectOption).removeClass('multiSpan');
				}
			});

			var selectedAttrOptions = [];

			if(selectDiv.find('.selected').length > 1){
				var selectedValue = selectDiv.find('.selected');

				for(var i = 0;i < selectedValue.length;i++ ){
					selectedAttrOptions.push($(selectedValue[i]).attr("data-combo-value"));
				}

				selectDiv.find(selectboxSelected).text(selectedAttrOptions.join(','));

				if(selectedAttrOptions.length > 2){
					selectDiv.find(selectboxSelected).text(selectedAttrOptions.length + " selected");
				}

				if(selectedAttrOptions.length == selectDiv.find(selectOption).length){
					selectDiv.find(selectboxSelected).text("All selected!");
				}
				selectDiv.find("select").val(selectedAttrOptions).change();
			}
		}


		// Multiple(with checks) select with its parametres
		var multiselectChecksDatas = [],
				multiselectChecksValues = [];

		if(selectDiv.hasClass("multiple")){
			selectDiv.children('select').attr("multiple", true);

			selectDiv.find(selectOption).on("click",function(event){
				$(this).parent(selectboxDropdown).addClass('opened');
				$(this).parents(selectbox).find(selectboxSelected).addClass('active');

				if($(this).hasClass('multiSelected')){
					$(this).removeClass('multiSelected');

					var arrayMulti = multiselectChecksValues.indexOf($(this).text());

					multiselectChecksValues.splice(arrayMulti,1);

					$(this).closest(selectbox).find("select").val(multiselectChecksValues);

					if(multiselectChecksValues.length){
						if(multiselectChecksValues.length > 2){
							$(this).parent().siblings(selectboxSelected).text(multiselectChecksValues.length + " selected");
						}else{
							$(this).parent().siblings(selectboxSelected).text(multiselectChecksValues.join(','));
						}
					}else{
						$(this).parent().siblings(selectboxSelected).text(defaultTxt);
					}
				}else{
					$(this).addClass('multiSelected');
					multiselectChecksDatas.push($(this).attr("data-combo-value"));
					multiselectChecksValues.push($(this).text());

					$(this).closest(selectbox).attr('value',multiselectChecksValues.join(','));
					$(this).closest(selectbox).find("select").val(multiselectChecksDatas).change();
					$(this).parent().siblings(selectboxSelected).text(multiselectChecksValues.join(','));

					if(multiselectChecksValues.length > 2){
						$(this).parent().siblings(selectboxSelected).text(multiselectChecksValues.length + " selected");
					}

					if(multiselectChecksValues.length == selectDiv.find(selectOption).length){
						$(this).parent().siblings(selectboxSelected).text("All selected!");
					}
				}
			});

			var selectedAttrOptionsMultiple = new Array();
			if(selectDiv.find('.selected').length > 1){
				var selectedValue = selectDiv.find('.selected');

				for(var i = 0;i < selectedValue.length;i++ ){
					selectedAttrOptionsMultiple.push($(selectedValue[i]).attr("data-combo-value"));
				}
				
				selectDiv.find(selectboxSelected).text(selectedAttrOptionsMultiple.join(','));

				if(selectedAttrOptionsMultiple.length > 2){
					selectDiv.find(selectboxSelected).text(selectedAttrOptionsMultiple.length + " selected");
				}

				if(selectedAttrOptionsMultiple.length == selectDiv.find(selectOption).length){
					selectDiv.find(selectboxSelected).text("All selected!");
				}

				selectDiv.find("select").val(selectedAttrOptionsMultiple).change();
			}
		}
	});
}

document.addEventListener("DOMContentLoaded", function(){
	changeSelectbox();
});