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

constructor(private http: HttpClient) {}

  private allBooks: Book[] = [


      ];



  fetchBooks(query: string) {

    const formattedQuery = query
    .split(' ')
    .join('+')
    .toLowerCase();

    // Send HTTP GET Request to the "openLibrary" api endpoint using the tranformed input query
    this.http
      .get(`https://openlibrary.org/search.json?q=${formattedQuery}`)
    .subscribe((response) => {
      console.log('Search Response:', response);
      // Reset Books Array
      this.allBooks = [];
      // Save Books
      this.saveBooks(response as BooksResponseObject)
    })
  }


  getBooks() {
    console.log("this.allBooks:", this.allBooks);

    return this.allBooks.slice();
  }


  saveBooks(books:BooksResponseObject) {
    // this.allBooks =
    // Map over all the book results
    books.docs.map(book => {
      // Destructure the book results
      console.log({book})

      const {title, author_name, first_publish_year, isbn} = book

    // For each book result, create a new book
      const newBook = new Book(
        title,
        author_name ? author_name[0] : '',
        '',  // image goes here
        '',
        0,
        first_publish_year,
        isbn ? isbn[0] : ""

      );

      // console.log({'newBook:', newBook})

      // return(newBook)

      // Add it to allBooks array
      this.allBooks.push(newBook)

    });

    this.bookListChanged.next(this.allBooks.slice());
  }

}
