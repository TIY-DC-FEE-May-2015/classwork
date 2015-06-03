## Wednesday, May 27th

#### Today we covered:

* Arrays!
    * An **ordered** collection of variables, inside a single variable
    * Any variable type can be a member of an array
    * Create: `[ "item 1", "item 2", 3, "etc." ]`
    * Can create empty: `[]`
    * Address each item through square-bracket notation
        * `var arr = ["a", "b", "c"]`
        * `console.log(arr[1]) // "b"`
        * Remember: zero-indexing
        * Can modify array members like variables
* Array modification
    * `.push(something)` - add to back of array
    * `.pop()` - remove last entry from array
    * `.unshift(something)` - add to front of array
    * `.shift()` - remove first entry from array
* **for** Loops!
    * `for(start; stop; increment)`
    * implemented.. `for(var i = 0; i < 10; i += 1) { }`
    * Executes code block every iteration
    * Make sure your loop will end -- infinite loops are bad
* **while** Loops!
    * `while(condition)`
    * implemented.. `while(i < 10){ }`
    * Executes code block every iteration
    * Infinite loops **very** easy to accidentally do