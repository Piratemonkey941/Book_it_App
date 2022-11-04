import { AuthService } from './auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, take, tap } from 'rxjs';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { Book } from './book/book.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  firebaseRootURL: string =
      "https://bookshelfapp-5039b-default-rtdb.firebaseio.com/books.json"


  constructor(
                private http: HttpClient,
                private bookshelf: BookshelfService,
                private authService: AuthService,
             )
  {
    console.log(this.firebaseRootURL);
  }

  saveBooksToFirebase() {
    const books = this.bookshelf.getBooks();
    this.http.put(this.firebaseRootURL, books).subscribe((res) => {
      console.log('Firebase DB Response: ', res);
    });
  }


  fetchBooksFromFirebase() {
    return this.http
      .get(this.firebaseRootURL, {})
      .subscribe((res) => {
        this.bookshelf.setBooks(res as Book[])
      })

    return this.authService.currentUser.pipe(
      take(1),
      exhaustMap((user) => {
        console.log(user);
        return this.http
          .get(this.firebaseRootURL, {
            // default initialization using '??'
            params: new HttpParams().set('auth', user?.token ?? "")
          })
          .pipe(
            tap((books: any) => {
              this.bookshelf.setBooks(books as Book[])
            })
          )
      })
    )
  }
}



// https://bookshelfapp-5039b-default-rtdb.firebaseio.com/

// (process.env['FIREBASE_API_ENDPOINT'] as
//   string) + 'books.json';
