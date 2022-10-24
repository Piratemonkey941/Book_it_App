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
      new Book(
        'Book of Testing',
        'Will Wilder',
        'Mystery',
        'https://source.unsplash.com/50x50/?mystery,book'
      ),
      new Book(
        'Testing Title 2',
        'Nolan Hovis',
        'Science',
        'https://source.unsplash.com/50x50/?science,book'
      ),
      new Book(
        'Fantasy Test',
        'German Cruz',
        'Non-Fiction',
        'https://source.unsplash.com/50x50/?fantasy,book'
      ),
      new Book(
        'Fantasy Test',
        'Lex Pryor',
        'Math',
        'https://source.unsplash.com/50x50/?math,book'
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
        this.bookListChanged.next(this.myBooks.slice())
    }

    removeBook(idx: number) {
        if (idx !== -1) {

            this.myBooks.splice(idx, 1)
            this.bookListChanged.next(this.myBooks.slice());
        }
    }

    addBook(book: Book) {
      this.myBooks.push(book)
      this.bookListChanged.next(this.myBooks.slice())
    }

    updateBook(idx: number, updateBook: Book) {
      this.myBooks[idx] = updateBook
      this.bookListChanged.next(this.myBooks.slice())
    }

}






// @Input() book: Book

// constructor(private bookshelfService: BookshelfService) {}

// ngOnInit(): void {}

// onBookSelected() {
//   // Tell App Component that someone clicked on a book!
//   this.bookshelfService.bookSelected.emit(this.book);
// }
