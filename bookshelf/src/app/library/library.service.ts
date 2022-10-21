import { Injectable, EventEmitter,  } from "@angular/core";
import { Book } from "../shared/book/book.model";

@Injectable({
  providedIn: "root"
})
export class LibraryService {
bookListChanged = new EventEmitter<Book[]>();

  private allBooks: Book[] = [
    new Book(
      'The man who died twice',
      'Richard Osman',
      'https://m.media-amazon.com/images/I/61Kwfj2pEkL.jpg',
      'Fiction'
    ),
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



  ];

  getBooks() {
    return this.allBooks.slice();
  }
  constructor() {}
}
