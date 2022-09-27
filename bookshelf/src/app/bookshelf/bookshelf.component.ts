import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book/book.component';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  
  myBooks: Book[] = [
    new Book(
        'Book of Testing',
        'Will Wilder',
        'Mystery',
        'https://source.unsplash.com/50x50/?mystery,book'
    )
];
  constructor() { }

  ngOnInit(): void {
  }

}
