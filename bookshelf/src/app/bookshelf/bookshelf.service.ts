import { EventEmitter, Injectable, Input } from "@angular/core";
import { Book } from "../shared/book/book.model";
import { Subject } from "rxjs";


@Injectable({
  providedIn: "root"
})

export class BookshelfService {
  private myBooks: Book[]= []

  bookSelected = new Subject<Book>();
  bookListChanged = new Subject<Book[]>();


  getBooks() {
          return this.myBooks.slice();
        }



   // Remove a book
   removeBook(idx: number) {
    this.myBooks.splice(idx, 1);
    this.bookListChanged.next(this.getBooks());
  }
 // Add a book
    addBook(book: Book) {
      this.myBooks.push(book)
      this.bookListChanged.next(this.getBooks())
    }

    updateBook(idx: number, newBook: Book) {
      // Update the object
      this.myBooks[idx] = newBook;
      // Broadcast to subscribers of updated array
      this.bookListChanged.next(this.getBooks());
    }

    getBook(idx: number) {
      return this.myBooks.slice()[idx];
    }

    setBooks(books: Book[] | []) {
      console.log('%c books: ', 'color: red', books)

      this.myBooks = books || []
      this.bookListChanged.next(this.myBooks.slice())
    }

    saveBook(book: Book) {
      this.myBooks.push(book)
      this.bookListChanged.next(this.myBooks.slice())
  }

  // removeBook(idx: number) {
  //     if (idx !== -1) {

  //         this.myBooks.splice(idx, 1)
  //         this.bookListChanged.next(this.myBooks.slice());
  //     }
  // }
    constructor(){};
}



//     addBook(book: Book) {
//       this.myBooks.push(book)
//       this.bookListChanged.next(this.myBooks.slice())
//     }

//     updateBook(idx: number, updateBook: Book) {
//       this.myBooks[idx] = updateBook
//       this.bookListChanged.next(this.myBooks.slice())
//     }

//     getBook(idx: number) {
//       return this.getBooks()[idx];
//     }

//     setBooks(books: Book[]) {
//       console.log({books})
//       this.myBooks = books
//       this.bookListChanged.next(this.getBooks())
//     }

// }




    // saveBook(book: Book) {
    //     this.myBooks.push(book)
    //     this.bookListChanged.next(this.myBooks.slice())
    // }

// new Book(
//   'Book of Testing',
//   'Will Wilder',
//   'https://source.unsplash.com/50x50/?mystery,book',
//   'Mystery'
// ),
// new Book(
//   'Children of Time',
//   'Adrian Tchikovski',
//   'https://m.media-amazon.com/images/I/51tuexbxdIL._SL500_.jpg',
//   'SciFi'
// ),

// @Input() book: Book

// constructor(private bookshelfService: BookshelfService) {}

// ngOnInit(): void {}

// onBookSelected() {
//   // Tell App Component that someone clicked on a book!
//   this.bookshelfService.bookSelected.emit(this.book);
// }
