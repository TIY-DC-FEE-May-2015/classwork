/*
var $orangeSpan = $("span.orange")

$orangeSpan.text("here is some programmatically added text")
  .addClass("blue")
  .removeClass("orange")
  .on("click", function(evt){

    $(this).text("hey whats up")

  })

*/

var $orangeStuff = $(".orange")

$orangeStuff.addClass("red").removeClass("orange")

$orangeStuff.on("mouseover", function(){

  $(this).text("moused over")

}).on("mouseout", function(){

  $(this).text($(this).attr("data-original-text"))

})

$orangeStuff.each(function(index, node){

  $(node).attr("data-original-text", $(node).text())

})