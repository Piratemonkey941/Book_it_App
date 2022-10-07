import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { BookComponent } from 'src/app/shared/book/book.component';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfComponent } from '../bookshelf.component';
import { BookshelfService } from '../bookshelf.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() book:Book;
  myBooks: Book[] = [];

  @Output() currentSelectedBook = new EventEmitter<BookComponent>();




  constructor(private bookshelfService: BookshelfService) { }

  ngOnInit(): void {
      // Use the Service to set local "myBooks" array to Service/Global "myBooks" array
      this.myBooks = this.bookshelfService.getBooks();
      // Listen for changes on the global "myBooks" array and update the local version
      this.bookshelfService.bookListChanged.subscribe((books: Book[]) => {
        this.myBooks = books;
      });
  }


  onRemoveBook(idx: number): void {
    this.bookshelfService.removeBook(idx);

  }

}






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
