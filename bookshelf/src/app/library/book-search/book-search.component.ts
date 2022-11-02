import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private library: LibraryService
    ) { }

  ngOnInit(): void {
  }

  onFetchBooks(searchInput: string) {
    // Turn Search Query into lowercase words with plus sign for spaces
    const formattedQuery = searchInput.split(' ').join('+').toLowerCase();

    // Send HTTP GET Request to the "openLibrary" api endpoint using the tranformed input query
    this.http
      .get(`http://openlibrary.org/search.json?q=${formattedQuery}`)
      .subscribe((searchResults) => {
        console.log('searchResults', searchResults);
      });
  }

  
}

      // this.library.fetchBooks(searchQuery);
    //   console.log("Fetch Books")

