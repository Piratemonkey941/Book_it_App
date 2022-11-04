import { EventEmitter, Injectable, Input } from "@angular/core";
import { Book } from "../shared/book/book.model";
import { Subject } from "rxjs";


@Injectable({
  providedIn: "root"
})

export class BookshelfService {
  private myBooks: Book[]= [

      new Book(
        'Book of Testing',
        'Will Wilder',
        'https://source.unsplash.com/50x50/?mystery,book',
        'Mystery'
      ),
      new Book(
        'Children of Time',
        'Adrian Tchikovski',
        'https://m.media-amazon.com/images/I/51tuexbxdIL._SL500_.jpg',
        'SciFi'
      ),

    ]

    bookSelected =  new Subject<Book>();
    bookListChanged = new Subject<Book[]>();

  getBooks() {
          return this.myBooks.slice();
        }

  getBook(idx: number) {
          return this.getBooks()[idx];
        }

  saveBook(book: Book) {
        this.myBooks.push(book)
        this.bookSelected.next(book)
        this.bookListChanged.next(this.myBooks.slice())
  }

  removeBook(idx: number) {
        if (idx >= 0) {
            this.bookSelected.next(this.myBooks[idx])
            this.myBooks.splice(idx, 1)
            this.bookListChanged.next(this.myBooks.slice());
        }
  }

    // addBook(book: Book) {
    //   this.myBooks.push(book)
    //   this.bookListChanged.next(this.myBooks.slice())
    // }

    updateBook(idx: number, updateBook: Book) {
      this.myBooks[idx] = updateBook
      this.bookListChanged.next(this.myBooks.slice())
    }

    // setBooks(books: Book[]) {
    //   console.log({books})
    //   this.myBooks = books
    //   this.bookListChanged.next(this.getBooks())
    // }

    setBooks(books: Book[] | []) {
      console.log('%c  books: ', 'color: red;', books);

      this.myBooks = books || [];
      this.bookListChanged.next(this.myBooks.slice());
  }

}






// @Input() book: Book

// constructor(private bookshelfService: BookshelfService) {}

// ngOnInit(): void {}

// onBookSelected() {
//   // Tell App Component that someone clicked on a book!
//   this.bookshelfService.bookSelected.emit(this.book);
// }
