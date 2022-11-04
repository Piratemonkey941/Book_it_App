import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter,  } from "@angular/core";
import { Book } from "../shared/book/book.model";


type BooksResponseObject = Object & {
  docs: any[]
}


@Injectable({
  providedIn: "root"
})

export class LibraryService {
bookListChanged = new EventEmitter<Book[]>();

private allBooks: Book[] = [ ];

constructor(private http: HttpClient) {}

  getBooks() {
    return this.allBooks.slice();
  }

  fetchBooks(searchQuery: string) {

    const formattedQuery = searchQuery.split(' ').join('+').toLowerCase();

    this.http
      .get(`https://openlibrary.org/search.json?q=${formattedQuery}`)
    .subscribe((searchResponse) => {
      console.log('Search Response:', searchResponse);
      this.allBooks = []
      this.saveBooks(searchResponse as BooksResponseObject)
    })
  }

 saveBooks(books:BooksResponseObject) {
    this.allBooks = books.docs.map((book) => {
      //transform response data into book model obj as expected

      console.log({book})

      const { title, author_name, coverImagePath, genre} = book

      const newBook = new Book(
        title,
        author_name ? author_name[0] : '',
        '',  // image goes here
        '',
        0,
        genre,
        coverImagePath,
        // first_publish_year,
        // isbn ? isbn[0] : '',
      );

      console.log({book})

      return(newBook)

    })
    this.bookListChanged.next(this.getBooks());
  }


}
