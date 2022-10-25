import { Injectable } from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Book } from '../book/book.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  firebaseRootURL: string = "https://bookshelfapp-5039b-default-rtdb.firebaseio.com/books.json"

  constructor(
    private http: HttpClient,
    private bookshelf: BookshelfService
    ) {
      console.log(this.firebaseRootURL)
     }

     saveBooksToFirebase() {
      const books = this.bookshelf.getBooks();
      this.http.put(this.firebaseRootURL, books).subscribe((res) => {
        console.log("Firebase DB Response:", res)
      })
     }

     fetchBooksFromFirebase (){
      return this.http.get (this.firebaseRootURL, {}).
        subscribe((res) => {
          this.bookshelf.setBooks(res as Book[])
      })
     }




}
// https://bookshelfapp-5039b-default-rtdb.firebaseio.com/

// (process.env['FIREBASE_API_ENDPOINT'] as
//   string) + 'books.json';
