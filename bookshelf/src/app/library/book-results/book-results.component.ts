import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.component';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  allBooks: Book[] = [
    new Book(
        'Book of Testing',
        'Will Wilder',
        'Mystery',
        'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
        'Children of Time',
        'Adrian Tchikovski',
        'SciFi',
        'https://m.media-amazon.com/images/I/51tuexbxdIL._SL500_.jpg'
    ),

];
}
