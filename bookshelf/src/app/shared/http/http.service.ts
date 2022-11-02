import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { Book } from '../book/book.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  firebaseRootURL: string = "https://bookshelfapp-5039b-default-rtdb.firebaseio.com/books.json"

  constructor(
    private http: HttpClient,
    private bookshelfService: BookshelfService,
    // private authService: AuthService
    ) {
      console.log(this.firebaseRootURL)
     }

     saveBooksToFirebase() {
      const books = this.bookshelfService.getBooks();
      this.http.put(this.firebaseRootURL, books).subscribe((res) => {
        console.log("Firebase DB Response:", res)
      })
     }

     fetchBooksFromFirebase() {
      return this.http.get<Book[]>(this.firebaseRootURL, {}).pipe(
        tap(books => {
          this.bookshelfService.setBooks(books);
        })
      );
    }
}



// https://bookshelfapp-5039b-default-rtdb.firebaseio.com/

// (process.env['FIREBASE_API_ENDPOINT'] as
//   string) + 'books.json';
