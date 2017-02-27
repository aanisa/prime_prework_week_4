/**
Object Literals
**/

function threeBooks() {
  var oneBook = {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    pageCount: 197,
    haveRead: true
  };
  var twoBook = {
    title:'Americanah',
    author:'Chimamanda Ngozi',
    pageCount: 791,
    haveRead: false
  };
  var threeBook = {
    title:'Animal Farm',
    author: 'George Orwell',
    pageCount: 84,
    haveRead: true
  };
  var books = [oneBook, twoBook, threeBook];
  return books;
}

console.log(threeBooks());

//

function fixLiteralSyntax() {
  var avengersMovie = {
      name : 'Avengers',
      runtime : 143,
      releaseYear: 2012,
      Director: "Joss Whedon"
  };
  return avengersMovie;
}

console.log(fixLiteralSyntax());



/**
Object Constructors
**/

//would be better if created a Book constructor and used this.title, this.author.etc.

function createBooksWithConstructor() {
  var book1 = new Object ();
    book1.title ='The Alchemist';
    book1.author = 'Paulo Coelho';
    book1.pageCount = 197;
    book1. haveRead = true;
  var book2 = new Object ();
    book2.title = 'Americanah';
    book2.author = 'Chimamanda Ngozi';
    book2.pageCount = 791;
    book2.haveRead = false;
  var book3 = new Object ();
    book3.title = 'Animal Farm';
    book3.author = 'George Orwell';
    book3.pageCount = 84;
    book3. haveRead = true;

var books = [book1, book2, book3];
  return books;
}

console.log(createBooksWithConstructor());


// -- DON'T TOUCH CODE BELOW --
module.exports = {
  threeBooks: threeBooks,
  fixLiteralSyntax: fixLiteralSyntax,
  Book: Book,
  createBooksWithConstructor: createBooksWithConstructor
};
