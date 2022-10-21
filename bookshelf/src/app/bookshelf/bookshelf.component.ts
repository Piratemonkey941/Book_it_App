import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book/book.model';
import { BookshelfService } from './bookshelf.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  selectedBook: Book

  constructor( private bookshelfService: BookshelfService) { }

  ngOnInit(): void {
    this.bookshelfService.bookSelected.subscribe((book:Book) => {
      this.selectedBook = book;
    })
    };
  }

// 

  // selectedBook: Book = new Book ( '','','','');

  // // Subscribe to the bookshelfService to get all the global updates inside this component
  // this.bookshelfService.bookSelected.subscribe((book: Book) => this.selectedBook = book)


//   myBooks: BookComponent[] = [
//     new BookComponent(
//   )
// ];

// @Output() currentSelectedBook = new EventEmitter<BookComponent>();

  // handleBookSelected(book: BookComponent){
  //   this.currentSelectedBook.emit(book)
  // }



// 'Book of Testing',
// 'Will Wilder',
// 'Mystery',
// 'https://source.unsplash.com/50x50/?mystery,book'
