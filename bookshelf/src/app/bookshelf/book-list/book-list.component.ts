import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { BookComponent } from 'src/app/shared/book/book.component';
import { BookshelfComponent } from '../bookshelf.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Output() currentSelectedBook = new EventEmitter<BookComponent>();


  handleBookSelected(book: BookComponent) {
    // console.log('BOOK:', book);
    this.currentSelectedBook.emit(book);
  }

  constructor() { }

  ngOnInit(): void {
  }



//   (method) BookListComponent.handleBookSelected(book: BookComponent,
//     { this, currentSelectedBook, emit }: {
//     this: any;
//     currentSelectedBook: any;
//     emit: any;
// }): any



   myBooks: BookComponent[] = [
    new BookComponent(
 )
];
}

// 'Book of Testing',
// 'Will Wilder',
// 'Mystery',
// 'https://source.unsplash.com/50x50/?mystery,book'
