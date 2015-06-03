## Monday, June 1st

#### Today we covered:

* Functional programming!
    * `map`: Traverse an array, return a modified copy
    * `filter`: Traverse an array, return a smaller copy
    * `reduce`: Traverse an array, return a single value
* Native FP methods exist on *arrays*, only
    * `[1,2,3].map(function(){ /* return something */ })`
* Reduce is special
    * Requires a start value as a second parameter after the "iterator" function
    * Has iterator signature of `(memory, item, index)`
* [Underscore.js](http://www.underscorejs.org) - awesome utility belt library
    * Brings functional programming to older browsers
    * Allows for *some* functional programming on objects
    * Lots of nifty shortcuts -- `sortBy`, `groupBy`, `extend`...
    * Excellent documentation and annotated source code