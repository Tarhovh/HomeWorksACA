// 2nd.

class Author {
    constructor(name, email, gender) {
      this._name = name;
      this._email = email;
      this._gender = gender;
    }
  
    get name() {
      return this._name;
    }
  
    get email() {
      return this._email;
    }
  
    get gender() {
      return this._gender;
    }
  
    set name(value) {
      this._name = value;
    }
  
    set email(value) {
      this._email = value;
    }
  
    set gender(value) {
      this._gender = value;
    }
  
    toString() {
      return `    The Book's author: ${this._name}. 
      Email: ${this._email}. Gender: ${this._gender}`
    }
  }
  
  class Book {
  
    constructor(title, author, price, quantity) {
  
      this._title = title;
      this._author = author;
      this._price = price;
      this._quantity = quantity;
  
    }
  
    get title () {
      return this._title;
    }
    get author() {
      return this._author;
    }
  
    get price () {
      return this._price;
    }
  
    get quantity () {
      return this._quantity;
    }
  
    set title (value) {
      this._title = value;
    }
  
    set author (value) {
      this._author = value;
    }
  
    set price(value) {
      this._price = value;
    }
  
    set quantity (value) {
      this._quantity = value;
    }
  
    getProfit() {
      return `The profit from the sale of the book is $${this._price * this._quantity}`;
    }
  
    toString () {
      return `${this.author}. 
      Book's title is "${this.title}". 
      Price: $${this.price}, quantity: ${this.quantity}`
    }
  
  
  }
  
  let book1 = new Book()
  
  book1.author = new Author();
  book1.author.name = "John";
  book1.author.email = "John@gmail.com";
  book1.author.gender = "male"
  book1.title = "New Book";
  book1.price = 125;
  book1.quantity = 5000;
  
  console.log(book1.toString())
  console.log(book1.getProfit())


  console.log("------End of Second------")