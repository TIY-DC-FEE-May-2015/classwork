## Tuesday, June 2nd

#### Today we covered:

* Some good software principles
    * Encapsulation -- Write functions that modify values, don't modify the core values
    * **D**on't **R**epeat **Y**ourself -- Write code so that something is only done once, and other code calls it
* Document Object Model
    * A set of JavaScript variables/functions that are provided by browsers to interact with the page
    * Most common: `document`
        * .getElementById() -- singular
        * .getElementsByClassName()
        * .getElementsByTagName()
        * .querySelectorAll()
        * .innerText / .innerHTML
        * .onclick = function(){}
* jQuery
    * Programming library that encapsulates DOM methods and properties in an intelligent, dev-friendly way
    * More or less everything done via `$("css selector").something()`
    * `$(document).on("ready", function(){ /* put code here to run when page finishes loading */ })`
    * `$("selector").on("some_event", function(){ /* binding handlers */ })`
    * Many more things you can do -- check the documentation!

#### A whole bunch of links:

* [Mozilla - Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
* [Understanding the DOM conceptually - CSS Tricks](https://css-tricks.com/dom/)
* [jQuery Documentation](http://api.jquery.com/)