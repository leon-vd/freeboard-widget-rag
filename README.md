Freeboard RAG Widget Plugin
===============

This is a widget plugin for http://freeboard.io that displays a simple RAG (Red/Amber/Green) Indicator.

![preview](documentation/widget.ragIndicator.preview.png)

#### Installation

Include the widget.ragIndicator.js in your main web page for freeboard, after the base 'freeboard.widgets.js' file and any other widget plugin files.

#### Overview

This widget displays a different coloured light depending on the value received. 

#####0 Green light
#####1 Amber light
#####2 Red light

####Widget Settings

![settings](documentation/widget.ragIndicator.settings.png)

#####Value
Requires an integer.  Accepted values are 0 (Green), 1 (Amber) and 2 (Red).

#####Green Text
The text to show when the light is green. This can be linked to a dynamic datasource or be statically set.

#####Amber Text
The text to show when the light is amber.  This can be linked to a dynamic datasource or be statically set.

#####Red Text
The text to show when the light is green. This can be linked to a dynamic datasource or be statically set.
