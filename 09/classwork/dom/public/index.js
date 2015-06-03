var orangeStuff = document.querySelectorAll(".orange")

console.log(orangeStuff)

/*
for (var i = 0 ; i < orangeStuff.length; i++) {
  var orangeThing = orangeStuff[i]

  orangeThing.onclick = function(evt) {
    evt.target.innerText = "you clicked me!"
  }
}
*/

orangeStuff = Array.prototype.slice.call(orangeStuff)


orangeStuff.forEach(function(node){
  
  node.setAttribute("data-original-text", node.innerText)

  node.onmouseover = function(evt) {
    evt.target.className = "orange blue"
    evt.target.innerText = "moused over"
  }

  node.onmouseout = function(evt) {
    evt.target.className = "orange"
    evt.target.innerText = evt.target.getAttribute("data-original-text")
  }
  
})