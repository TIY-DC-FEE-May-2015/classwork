var displayLeftSide = function(arrayOfBooks) {

  _.each(arrayOfBooks.books, function(book){
    var htmlString = templates.leftBook( book )
    var $book = $(htmlString)

    $("#leftSide").append($book)

    $book.on("click", function(){
      getSpecificBook(book.id, displayRightSide)
    })
  })

}

var displayRightSide = function(id, specificBook) {
  $("#rightSide").html( templates.rightBook( specificBook ) )
}

var getAllBooks = function(callback){

  $.ajax({
    url: "/book",
    method: "GET",
    success: callback
  })

}

var getSpecificBook = function(id, callback) {

  $.ajax({
    url: ("/book/" + id),
    method: "GET",
    success: function(data){
      callback(id, data)
    }
  })

}

var templates = {}
$(document).on("ready", function(){

  templates.leftBook = Handlebars.compile( $("#leftSideBook").html() )
  templates.rightBook = Handlebars.compile( $("#rightSideBook").html() )

  getAllBooks(displayLeftSide)

})