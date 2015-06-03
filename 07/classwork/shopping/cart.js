var assert = function(a, b) {
  if (a !== b) {
    console.log("Test failure: ", a, b)
  }
}

var cart = {

  // An array that contains a list of books to be purchased
  bookList: [ ],

  // A function that takes in two parameters
  //  - The name of a book
  //  - The price of a book
  // It adds that book to the book list
  addBook: function(titleOfBook, priceOfBook) {
    var book = {
      title: titleOfBook,
      price: priceOfBook
    }

    cart.bookList.push(book)
  },

  // A function that returns 
  // the total cost of all books in the cart 
  showCost: function() {
    var sum = 0
      
    for (var i = 0; i < cart.bookList.length; i++) {
      sum = sum + cart.bookList[i].price
    }

    return sum
  },

  // Empties the book list of all books
  empty: function() {
    cart.bookList = []
  }

}

assert(cart.bookList.length, 0)

cart.addBook("Terrible Dan Brown Novel", 15.25)
cart.addBook("Twilight", 8.50)

assert(cart.bookList.length, 2)
assert(cart.showCost(), 23.75)

cart.empty()

assert(cart.bookList.length, 0)
assert(cart.showCost(), 0)

