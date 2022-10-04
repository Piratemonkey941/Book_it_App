import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookComponent } from '../shared/book/book.component';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  selectedBook: BookComponent ;

  myBooks: BookComponent[] = [
    new BookComponent(
  )
];

@Output() currentSelectedBook = new EventEmitter<BookComponent>();

  constructor() { }

  ngOnInit(): void {
  }

  handleBookSelected(book: BookComponent){
    this.currentSelectedBook.emit(book)
  }

}

// 'Book of Testing',
// 'Will Wilder',
// 'Mystery',
// 'https://source.unsplash.com/50x50/?mystery,book'
