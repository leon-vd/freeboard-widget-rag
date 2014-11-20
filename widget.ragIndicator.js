(function()
{
	//Our RAG indicator styles
	freeboard.addStyle('.rag-light', "border-radius:50%;width:22px;height:22px;border:2px solid #3d3d3d;margin-top:5px;float:left;background-color:#222;margin-right:10px;");
	freeboard.addStyle('.rag-light.red', "background-color:#D90000;box-shadow: 0px 0px 15px #D90000;border-color:#FDF1DF;");
	freeboard.addStyle('.rag-light.amber', "background-color:#E49B00;box-shadow: 0px 0px 15px #E49B00;border-color:#FDF1DF;");
	freeboard.addStyle('.rag-light.green', "background-color:#00B60E;box-shadow: 0px 0px 15px #00B60E;border-color:#FDF1DF;");
	freeboard.addStyle('.rag-text', "margin-top:10px;");
    
	var ragWidget = function (settings) {
        var self = this;
        var titleElement = $('<h2 class="section-title"></h2>');
        var stateElement = $('<div class="rag-text"></div>');
        var indicatorElement = $('<div class="rag-light"></div>');
        var currentSettings = settings;
		
		//store our calculated values in an object
		var stateObject = {};
        
		function updateState() {            
			//Remove all classes from our indicator light
			indicatorElement
				.removeClass('red')
				.removeClass('amber')					
				.removeClass('green')		
			
			//check our calculated indicator value and add the relevant class and calculated text
			switch (stateObject.value) {
				case 0:			
					indicatorElement.addClass('green');
					stateElement.html((_.isUndefined(stateObject.green_text) ? "" : stateObject.green_text));
					break;
				case 1:			
					indicatorElement.addClass('amber');
					stateElement.html((_.isUndefined(stateObject.amber_text) ? "" : stateObject.amber_text));
					break;
				case 2:			
					indicatorElement.addClass('red');
					stateElement.html((_.isUndefined(stateObject.red_text) ? "" : stateObject.red_text));
					break;
				default:
					stateElement.html("Error retrieving status");
				}
        }

        this.render = function (element) {
            $(element).append(titleElement).append(indicatorElement).append(stateElement);			
        }
		
		 

        this.onSettingsChanged = function (newSettings) {
            currentSettings = newSettings;
            titleElement.html((_.isUndefined(newSettings.title) ? "" : newSettings.title));
            updateState();
        }

        this.onCalculatedValueChanged = function (settingName, newValue) {
            //whenever a calculated value changes, stored them in the variable 'stateObject'
			stateObject[settingName] = newValue;
            updateState();
        }

        this.onDispose = function () {
        }

        this.getHeight = function () {
            return 1;
        }

        this.onSettingsChanged(settings);
    };

    freeboard.loadWidgetPlugin({
        type_name: "ragIndicator",
        display_name: "RAG Indicator",
        settings: [
            {
                name: "title",
                display_name: "Title",
                type: "text"
            },
            {
                name: "value",
                display_name: "Value (G=0, A=1, R=2)",
                type: "calculated"
            },
			{
                name: "green_text",
                display_name: "Green Text",
                type: "calculated"
            },            
            {
                name: "amber_text",
                display_name: "Amber Text",
                type: "calculated"
            },
			{
                name: "red_text",
                display_name: "Red Text",
                type: "calculated"
            }
            
			
        ],
        newInstance: function (settings, newInstanceCallback) {
            newInstanceCallback(new ragWidget(settings));
        }
    });
}());	
