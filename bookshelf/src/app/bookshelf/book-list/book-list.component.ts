import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

// import { BookComponent } from 'src/app/shared/book/book.component';
// import { BookshelfComponent } from '../bookshelf.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  myBooks: Book[] = [];

  @Output() currentSelectedBook = new EventEmitter<Book>();

  constructor(private bookshelfService: BookshelfService) { }

  ngOnInit(): void {
    this.myBooks = this.bookshelfService.getBooks();
    this.bookshelfService.bookListChanged.subscribe((books: Book[]) => {this.myBooks = books;
    });
}

onRemoveBook(idx: number): void {
  this.bookshelfService.removeBook(idx);

}

}














// @Input() book:Book;
//    myBooks: BookComponent[] = [
//     new BookComponent(
//  )


 // handleBookSelected(book: BookComponent) {
  //   // console.log('BOOK:', book);
  //   this.currentSelectedBook.emit(book);
  // }



// 'Book of Testing',
// 'Will Wilder',
// 'Mystery',
// 'https://source.unsplash.com/50x50/?mystery,book'

//   (method) BookListComponent.handleBookSelected(book: BookComponent,
//     { this, currentSelectedBook, emit }: {
//     this: any;
//     currentSelectedBook: any;
//     emit: any;
// }): any
