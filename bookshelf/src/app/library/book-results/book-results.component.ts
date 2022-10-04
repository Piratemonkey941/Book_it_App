import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent implements OnInit {



  allBooks: Book[] = [
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

constructor() { }

ngOnInit(): void {
}

}
