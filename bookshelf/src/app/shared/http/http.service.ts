import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { Book } from '../book/book.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // *VARIABLES**
  firebaseRootURL: string = "https://bookshelfapp-5039b-default-rtdb.firebaseio.com/books.json"

  // *INJECTIONS*
  constructor(
    private http: HttpClient,
    private bookshelfService: BookshelfService
    ) {
      console.log(this.firebaseRootURL)
     }
    // *METHOD* - Save books to Firebase DB
     saveBooksToFirebase() {
      const books = this.bookshelfService.getBooks();

      this.http.put(this.firebaseRootURL, books).subscribe(res => {
        console.log("Firebase DB Response:", res)
      })
     }
    // *METHOD* - Fetch books from Firebase DB
    fetchBooksFromFirebase (){
      return this.http.get(this.firebaseRootURL, {}).pipe(
        tap((books: Book[]) => {
          this.bookshelfService.setBooks(books);
        })
      );
    }
}

// https://bookshelfapp-5039b-default-rtdb.firebaseio.com/

// (process.env['FIREBASE_API_ENDPOINT'] as
//   string) + 'books.json';
