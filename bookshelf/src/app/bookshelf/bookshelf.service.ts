import { EventEmitter, Injectable, Input } from "@angular/core";
import { Book } from "../shared/book/book.model";


@Injectable({
  providedIn: "root"
})

export class BookshelfService {

  @Input() book: Book

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {}

  onBookSelected() {
    // Tell App Component that someone clicked on a book!
    this.bookshelfService.bookSelected.emit(this.book);
  }

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

bookSelected =  new EventEmitter<Book>();
bookListChanged = new EventEmitter<Book[]>();

    getBooks() {
      return this.myBooks.slice();
    }

saveBook(book: Book) {
    this.myBooks.push(book)
    this.bookListChanged.emit(this.myBooks.slice())
}

removeBook(idx: number) {
    if (idx !== -1) {
        // We have a book at that index
        this.myBooks.splice(idx, 1)
        this.bookListChanged.emit(this.myBooks.slice());
    }
}


}
