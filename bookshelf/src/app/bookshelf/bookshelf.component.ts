import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book/book.component';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  selectedBook: Book;

  myBooks: Book[] = [
    new Book(
        'Book of Testing',
        'Will Wilder',
        'Mystery',
        'https://source.unsplash.com/50x50/?mystery,book'
    )
];

@Output() currentSelectedBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  handleBookSelected(book: Book){
    this.currentSelectedBook.emit(book)
  }

}
