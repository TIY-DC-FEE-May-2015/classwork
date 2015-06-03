## Thursday, May 28th

#### Today we covered:

* **Don't panic.** 
    * Seriously. 
    * This stuff is difficult! 
    * And everyone who has ever learned to code has struggled with the same elements you might be.
    * It just takes practice.
* Objects!
    * Key-value pairs -- every key needs a value, every value needs a key
    * Keys are **unique** and **strings**
    * Set like any other variable -- `var obj = { }`
    * Properties can be added in declaration (`obj = { a: 10, b: 25 }`)
    * Properties can be added later (`obj.c = 45`)
* Dot notation v. bracket notation
    * `object.propertyName` === `object["propertyName"]`
    * Need to use bracket notation for variable property names..

```javascript
var obj = { a: 10, b: 20 }
var c = "a"

console.log(obj.c) // undefined
console.log(obj["c"]) // undefined, equivalent to above

console.log(obj[c]) // 10 -- c used as a variable
```