var shop = {

  // Contains all of the books
  bookList: [ ],

  // Contains the amount of money earned by selling books
  cashRegister: 0,

  // Returns total number of books in the list
  bookCount: function() {
    return shop.bookList.length
  },

  // Add a new book, with title, author, and price
  addBook: function(title, author, price) {
    // Create a new book object
    var book = {
      // with title
      "title": title,
      // with author
      "author": author,
      // with price
      "price": price
    }

    // Add that book to the book list
    shop.bookList.push(book)
  },

  // Returns all books written by the specified author
  findByAuthor: function(author) {
    var matches = []

    for (var i = 0; i < shop.bookList.length; i++) {
      var book = shop.bookList[i]

      if (book.author === author) {
        matches.push(book)
      }
    }

    return matches
  },

  // Returns the book with this title
  findByTitle: function(title) {
    // Loop through list of books
    for (var i = 0; i < shop.bookList.length; i++) {
      var book = shop.bookList[i]

      // If this book's title matches the parameter title
      if (book.title === title) {
        // Return this book
        return book
      }

    }
    
    // If not found, return false
    return false
  },

  // This function takes in a title of a book
  // IF that title exists, it adds that much money
  // to the cash register
  buyBook: function(title) {
    // Find out if this book exists or not
    var book = shop.findByTitle(title)

    // If the book doesn't exist, return
    if (book === false) {
      return
    }

    // Find this book's price
    var price = book.price

    // Add that price to the cash register
    shop.cashRegister += price
  }

}

assert(shop.bookCount(), 0)

shop.addBook("Twilight 2: Somehow, werewolves?", "Stephanie Meyer", 1)
shop.addBook("The Life and Death of JavaScript", "Gary Bernhardt", 15.43)

assert(shop.bookCount(), 2)

shop.addBook("Sonnets", "William Shakespeare", 8)
shop.addBook("Romeo & Juliet", "William Shakespeare", 10)
shop.addBook("Hamlet", "William Shakespeare", 5.50)

assert(shop.bookCount(), 5)

assert(shop.findByAuthor("William Shakespeare").length, 3)


assert(shop.cashRegister, 0)

shop.buyBook("Hamlet")

assert(shop.cashRegister, 5.50)

shop.buyBook("An awesome Dan Brown novel")

assert(shop.cashRegister, 5.50)
