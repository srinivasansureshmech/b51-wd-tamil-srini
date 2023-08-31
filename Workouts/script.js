// let num = [1,2,3,4,5];
// console.log(num.map((N)=>N**2));


// - Create a `Book` class that has properties for `title`, `author` and `isbn`.

// - Implement a method `displayInfo` that prints the book's information

// - Create an object to the `Book` class with the name book1.

class Book{
    constructor(title,author,isbn){
        this.Title=title,this.Author=author,this.Isbn=isbn;
    }

    displayInfo(){
        console.log(`Title:${this.Title},
Author:${this.Author},
ISBN:${this.Isbn}`);
    }
}

let book1 = new Book("The Magnet","Srinivasan",'VSI9787')
// console.log(book1);
book1.displayInfo();